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
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { LoginDto } from "./dto/login.dto";
import { GoogleService } from "./google.service";
import { RegisterDto } from "./dto/register.dto";
import { JWTGuard } from "@/auth/guards/jwt.guard";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly googleService: GoogleService
  ) {}

  @UseGuards(JWTGuard)
  @Get("current-user")
  getCurrentUser(@Req() request: AuthenticatedRequest) {
    return request.user;
  }

  @Post("register")
  async register(@Body() registerDto: RegisterDto, @Res() response: Response) {
    const { accessToken, refreshToken, user } =
      await this.authService.register(registerDto);
    this.authService.setRefreshTokenCookie(response, refreshToken);

    return response.json({ user, accessToken });
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
}
