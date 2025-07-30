import { Global, Module } from "@nestjs/common";
import { AccessControlService } from "./services/access-control.service";
import { FileUploadService } from "./services/file-upload.service";
import { PrismaService } from "@/prisma.service";

@Global()
@Module({
  providers: [AccessControlService, FileUploadService, PrismaService],
  exports: [AccessControlService, FileUploadService],
})
export class CommonModule {}
