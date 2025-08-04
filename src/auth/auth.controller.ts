import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  Res,
  HttpException,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { LoginDto } from "./dto/login.dto";
import { GoogleService } from "./google.service";
import { RegisterDto } from "./dto/register.dto";
import { UsersService } from "@/users/users.service";
import { JWTGuard } from "@/auth/guards/jwt.guard";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly googleService: GoogleService,
    private readonly usersService: UsersService
  ) {}

  @Get("current-user")
  async getCurrentUser(@Req() request: AuthenticatedRequest) {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Authorization token missing");
    }

    const token = authHeader.split(" ")[1];

    try {
      const userData = await this.authService.validateToken(token);

      const user = await this.usersService.findOne(userData.id);

      if (user) {
        delete user.password;
        return user;
      } else {
        throw new UnauthorizedException("User not found");
      }
    } catch (err) {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }

  @Post("register")
  async register(@Body() registerDto: RegisterDto, @Res() response: Response) {
    const { accessToken, refreshToken, user } =
      await this.authService.register(registerDto);
    this.authService.setRefreshTokenCookie(response, refreshToken);

    console.log("register:", refreshToken);
    return response.json({ user, accessToken, refreshToken });
  }

  @Get("google")
  async googleAuth(@Query("redirect") redirect: string, @Res() res: Response) {
    const googleLoginUrl = this.googleService.getGoogleAuthUrl(redirect);
    return res.redirect(googleLoginUrl);
  }

  @Get("google/callback")
  async googleAuthRedirect(
    @Query("code") code: string,
    @Query("state") redirect: string,
    @Res() response: Response
  ) {
    const tokenData = await this.googleService.getGoogleAccessToken(code);
    const userInfo = await this.googleService.getGoogleUserInfo(
      tokenData.access_token
    );

    const { accessToken, refreshToken } =
      await this.googleService.loginWithGoogle(userInfo);

    console.log("User logged in:", refreshToken);
    this.authService.setRefreshTokenCookie(response, refreshToken);
    response.redirect(
      `${redirect}?accessToken=${accessToken}&refreshToken=${refreshToken}`
    );
  }

  @Post("login")
  async login(
    @Body() loginDto: LoginDto,
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response
  ) {
    const { accessToken, refreshToken, user } =
      await this.authService.login(loginDto);
    this.authService.setRefreshTokenCookie(response, refreshToken);
    console.log("User logged in:", refreshToken);

    return { user, accessToken, refreshToken };
  }

  @Post("refresh-token")
  async refreshToken(
    @Body() refreshTokenDto: { refreshToken: string },
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response
  ) {
    const token = refreshTokenDto.refreshToken || req.cookies["refreshToken"];
    if (!token) {
      throw new HttpException("No refresh token", 401);
    }

    try {
      const { accessToken, refreshToken } =
        await this.authService.refreshToken(token);
      this.authService.setRefreshTokenCookie(response, refreshToken);
      return { accessToken, refreshToken };
    } catch (error) {
      response.clearCookie("refreshToken", { httpOnly: true });
      throw new HttpException("Refresh token is not valid", 401);
    }
  }

  @Post("logout")
  async logout(@Body() { userId }: { userId: string }, @Res() res: Response) {
    if (!userId) {
      throw new BadRequestException("No userId");
    }
    try {
      await this.authService.logout({ userId });
      res.clearCookie("refreshToken", { httpOnly: true });
      return res
        .status(HttpStatus.OK)
        .json({ status: "success", message: "Logged out successfully" });
    } catch (error) {
      throw new HttpException("Logout error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("verify-email")
  async verifyEmail(@Query("token") token: string) {
    if (!token) {
      throw new BadRequestException("Verification token is required");
    }

    const isVerified = await this.authService.verifyEmail(token);

    if (!isVerified) {
      throw new HttpException(
        "Bad request: Invalid or expired verification token",
        HttpStatus.BAD_REQUEST
      );
    }

    return { status: "success" };
  }

  @Post("resend-verification")
  async resendVerificationEmail(
    @Req() request: AuthenticatedRequest,
    @Body() data: { url: string; userId: string; cooldownSeconds?: number }
  ) {
    const cooldownSeconds =
      !data.cooldownSeconds || data.cooldownSeconds < 60
        ? 60
        : data.cooldownSeconds;
    await this.authService.sendVerificationEmail(
      data.userId,
      data.url,
      cooldownSeconds
    );

    return { message: "Verification email sent successfully" };
  }
}
