import { Module } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { SongsController } from "./songs.controller";
import { PrismaService } from "../prisma.service";
import { AuthModule } from "@/auth/auth.module";
import { PlaylistsModule } from "@/playlists/playlists.module";
import { CommonModule } from "@/common/common.module";

@Module({
  controllers: [SongsController],
  providers: [SongsService, PrismaService],
  exports: [SongsService],
  imports: [AuthModule, PlaylistsModule, CommonModule],
})
export class SongsModule {}
