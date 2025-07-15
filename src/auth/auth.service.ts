import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Response } from "express";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { CryptoService } from "./crypto.service";
import { PrismaService } from "../prisma.service";
import { UsersService } from "@/users/users.service";
import { User } from "@prisma/client";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/login.dto";
import { JwtPayload } from "./types/jwt-payload.type";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private cryptoService: CryptoService,
    private prisma: PrismaService,
    private configService: ConfigService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);

    if (
      user &&
      user.password === (await this.cryptoService.hashPasswordBcrypt(password))
    ) {
      return user;
    }

    return null;
  }

  async register(registerDto: RegisterDto) {
    const { name, password, email } = registerDto;

    try {
      const user = await this.usersService.findUserByEmail(email);

      if (user) {
        throw new HttpException("User already exists", 409);
      }

      const salt = await bcrypt.genSalt(10);
      const data = {
        name,
        email,
        password: await this.cryptoService.hashPasswordBcrypt(password),
        salt,
      };
      const newUser = await this.usersService.create(data);

      const tokens = await this.generateTokens({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      });
      return {
        ...tokens,
        user: { name: newUser.name, email: newUser.email, id: newUser.id },
      };
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async login({ password, email }: LoginDto) {
    try {
      const user = await this.usersService.findUserByEmail(email);

      if (!user) {
        throw new UnauthorizedException();
      }

      if (
        !(await this.cryptoService.verifyPasswordBcrypt(
          password,
          user?.password
        ))
      ) {
        throw new UnauthorizedException();
      }

      const payload = { email: user.email, id: user.id };

      const tokens = await this.generateTokens(payload);
      return {
        ...tokens,
        user: { name: user.name, email: user.email, id: user.id },
      };
    } catch (error) {
      console.error("Login error:", error);
      throw new UnauthorizedException();
    }
  }

  async logout({ userId }: { userId: string }) {
    try {
      await this.prisma.userRefreshToken.delete({
        where: { userId },
      });

      return true;
    } catch (error) {
      throw new Error(`Error during logout: ${error.message}`);
    }
  }

  async refreshToken(token: string) {
    try {
      const user = await this.validateToken(
        token,
        this.configService.get("jwt.refreshSecret")
      );
      const refreshToken = await this.prisma.userRefreshToken.findUnique({
        where: {
          userId: user.id,
          refreshToken: token,
        },
      });

      if (!refreshToken) {
        throw new HttpException("Invalid token", 401);
      }

      return await this.generateTokens(user);
    } catch (error) {
      throw new HttpException("Invalid token", 401);
    }
  }

  async validateToken(
    token: string,
    secret: string = this.configService.get<string>("jwt.secret")
  ): Promise<JwtPayload> {
    try {
      return await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret,
      });
    } catch (error) {
      throw new HttpException("Invalid token", 401);
    }
  }

  async generateTokens(
    user: Partial<User>
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const currentUser = await this.usersService.findOne(user.id);

    if (!currentUser) {
      throw new HttpException("User not found", 404);
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    const refreshToken = await this.jwtService.signAsync(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      {
        secret: this.configService.get("jwt.refreshSecret"),
        expiresIn: this.configService.get("jwt.refreshExpiresIn"),
      }
    );

    await this.prisma.userRefreshToken.upsert({
      where: {
        userId: user.id,
      },
      update: {
        refreshToken,
      },
      create: {
        userId: user.id,
        refreshToken,
      },
    });

    return { accessToken, refreshToken };
  }

  setRefreshTokenCookie(response: Response, refreshToken: string) {
    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge:
        1000 *
        60 *
        60 *
        24 *
        parseInt(this.configService.get("jwt.refreshExpiresIn"), 10),
    });
  }
}
