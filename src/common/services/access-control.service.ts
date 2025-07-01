import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "@/prisma.service";
import { JwtPayload } from "@/auth/types/jwt-payload.type";
import { RequestContextService } from "./request-context.service";

@Injectable()
export class AccessControlService {
  constructor(
    private prisma: PrismaService,
    private requestContextService: RequestContextService
  ) {}

  async validateAccess(
    resourceUserId: string,
    resourceName: string = "resource"
  ): Promise<void> {
    const currentUser: JwtPayload = this.requestContextService.getCurrentUser();

    if (!currentUser) {
      throw new UnauthorizedException("Authentication required");
    }

    const isOwner = resourceUserId === currentUser.id;
    const isAdmin = await this.isUserAdmin(currentUser.id);

    if (!isOwner && !isAdmin) {
      throw new ForbiddenException(
        `Not allowed to modify this ${resourceName}`
      );
    }
  }

  private async isUserAdmin(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { isAdmin: true },
    });
    return user?.isAdmin || false;
  }
}
