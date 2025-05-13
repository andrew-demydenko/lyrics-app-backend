import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class JWTGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Authorization token missing");
    }

    const token = authHeader.split(" ")[1];

    try {
      const user = await this.authService.validateToken(token);
      request.user = user;
      return true;
    } catch (err) {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }
}
