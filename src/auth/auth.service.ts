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
import { LoginDto } from "./dto/login.dto";
import { JwtPayload } from "./types/jwt-payload.type";
import { v4 as uuidv4 } from "uuid";
import { EmailService } from "./email.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private cryptoService: CryptoService,
    private prisma: PrismaService,
    private configService: ConfigService,
    private emailService: EmailService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);

    if (user && user.password) {
      const isValid = await this.cryptoService.verifyPasswordBcrypt(
        password,
        user.password
      );
      if (isValid) {
        return user;
      }
    }
    return null;
  }

  async register(registerDto: RegisterDto): Promise<{
    accessToken?: string;
    refreshToken?: string;
    user: Partial<User>;
  }> {
    const { name, password, email } = registerDto;

    try {
      const user = await this.usersService.findUserByEmail(email);

      if (user) {
        throw new HttpException("User already exists", 409);
      }

      const data = {
        name,
        email,
        password: await this.cryptoService.hashPasswordBcrypt(password),
        isVerified: false,
      };
      const newUser = await this.usersService.create(data);
      const tokens = await this.generateTokens({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      });
      return {
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          isVerified: newUser.isVerified,
        },
        ...tokens,
      };
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async login({ password, email }: LoginDto): Promise<{
    accessToken?: string;
    refreshToken?: string;
    user: Partial<User>;
  }> {
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

      const userData = {
        name: user.name,
        email: user.email,
        id: user.id,
        isVerified: user.isVerified,
      };

      const tokens = await this.generateTokens(payload);
      return {
        ...tokens,
        user: userData,
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
      console.log("Refresh token found:", refreshToken, user);

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
      name: currentUser.name,
      email: currentUser.email,
      isAdmin: currentUser.isAdmin,
      isVerified: currentUser.isVerified,
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
      secure: this.configService.get("app.nodeEnv") === "production",
      sameSite:
        this.configService.get("app.nodeEnv") === "production" ? "none" : "lax",
      maxAge:
        1000 *
        60 *
        60 *
        24 *
        parseInt(this.configService.get("jwt.refreshExpiresIn"), 10),
    });
  }

  async createVerificationToken(userId: string): Promise<string> {
    await this.prisma.verificationToken.deleteMany({
      where: { userId },
    });

    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    await this.prisma.verificationToken.create({
      data: {
        token,
        expiresAt,
        userId,
      },
    });

    return token;
  }

  async sendVerificationEmail(
    userId: string,
    url: string,
    cooldownSeconds: number
  ): Promise<void> {
    const user = await this.usersService.findOne(userId);
    if (!user) {
      throw new HttpException("User not found", 404);
    }

    const cooldownTime = new Date(Date.now() - cooldownSeconds * 1000);
    const recentToken = await this.prisma.verificationToken.findFirst({
      where: {
        userId,
        createdAt: { gt: cooldownTime },
      },
    });

    if (recentToken) {
      throw new HttpException(
        `Please wait ${cooldownTime} before requesting another verification email`,
        429
      );
    }

    const token = await this.createVerificationToken(userId);

    await this.emailService.sendVerificationEmail(user.email, token, url);
  }

  async verifyEmail(token: string): Promise<boolean> {
    const verificationToken = await this.prisma.verificationToken.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!verificationToken || verificationToken.expiresAt < new Date()) {
      return false;
    }

    await this.prisma.user.update({
      where: { id: verificationToken.userId },
      data: { isVerified: true },
    });

    await this.prisma.verificationToken.delete({
      where: { id: verificationToken.id },
    });

    return true;
  }
}
