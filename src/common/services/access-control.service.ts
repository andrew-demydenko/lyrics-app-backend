import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
  Inject,
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { PrismaService } from "@/prisma.service";
import { JwtPayload } from "@/auth/types/jwt-payload.type";

@Injectable()
export class AccessControlService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private request: any
  ) {}

  async validateAccess(
    resourceUserId: string,
    resourceName: string = "resource"
  ): Promise<void> {
    const currentUser: JwtPayload = this.request["user"];

    if (!currentUser) {
      throw new UnauthorizedException("Authentication required");
    }

    const isOwner = resourceUserId === currentUser.id;

    if (isOwner) {
      return;
    }

    const isAdmin = await this.isUserAdmin(currentUser.id);

    if (!isAdmin) {
      throw new ForbiddenException(
        `Not allowed to modify this ${resourceName}`
      );
    }
  }

  async isUserAdmin(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { isAdmin: true },
    });
    return user?.isAdmin || false;
  }
}
