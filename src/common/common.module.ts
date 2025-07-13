import { Global, Module } from "@nestjs/common";
import { AccessControlService } from "./services/access-control.service";
import { PrismaService } from "@/prisma.service";

@Global()
@Module({
  providers: [AccessControlService, PrismaService],
  exports: [AccessControlService],
})
export class CommonModule {}
