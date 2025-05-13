import { Injectable } from "@nestjs/common";
import { UsersService } from "@/users/users.service";
import { AuthService } from "@/auth/auth.service";
import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";

@Injectable()
export class GoogleService {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private configService: ConfigService
  ) {}

  private tokenAuthUrl = "https://oauth2.googleapis.com/token";
  private googleAuthPath = "https://accounts.google.com/o/oauth2/v2/auth";
  private userInfoPath = "https://www.googleapis.com/oauth2/v2/userinfo";

  private getClientId(): string {
    return `client_id=${this.configService.get("google.googleClientId")}`;
  }

  private getRedirectUri(): string {
    return `redirect_uri=${this.configService.get("google.googleCallbackUrl")}`;
  }

  private getGoogleScope(): string {
    return `response_type=code&scope=${encodeURIComponent(
      "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
    )}`;
  }

  async loginWithGoogle(userInfo: {
    email: string;
    given_name: string;
    id: string;
  }): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const { email, given_name, id } = userInfo;

    let user: User;

    try {
      user = await this.usersService.findUserByGoogleId(id);
    } catch (e) {}

    if (!user) {
      user = await this.usersService.create({
        email,
        name: given_name,
        googleId: id,
        provider: "google",
      });
    }

    const payload = { id: user.id, email: user.email, name: user.name };

    const tokens = await this.authService.generateTokens(payload);

    return tokens;
  }

  getGoogleAuthUrl(redirect: string): string {
    return `${this.googleAuthPath}?${this.getClientId()}&${this.getRedirectUri()}&${this.getGoogleScope()}&state=${encodeURIComponent(redirect)}`;
  }

  async getGoogleAccessToken(code: string): Promise<{ access_token: string }> {
    const response = await fetch(this.tokenAuthUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        client_id: this.configService.get("google.googleClientId"),
        client_secret: this.configService.get("google.googleClientSecret"),
        redirect_uri: this.configService.get("google.googleCallbackUrl"),
        grant_type: "authorization_code",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    return data;
  }

  async getGoogleUserInfo(
    accessToken: string
  ): Promise<{ email: string; given_name: string; id: string }> {
    const response = await fetch(
      `${this.userInfoPath}?access_token=${accessToken}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    const data = await response.json();
    return data;
  }
}
