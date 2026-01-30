import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { JWTGuard } from "./jwt.guard";

@Injectable()
export class AdminGuard extends JWTGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // First check if JWT is valid and user is verified
    const isValid = await super.canActivate(context);
    if (!isValid) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if user is admin
    if (!user.isAdmin) {
      throw new ForbiddenException("Admin access required");
    }

    return true;
  }
}
