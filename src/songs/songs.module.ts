import { Module } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { SongsController } from "./songs.controller";
import { PrismaService } from "../prisma.service";
import { AuthModule } from "@/auth/auth.module";
import { PlaylistsModule } from "@/playlists/playlists.module";

@Module({
  controllers: [SongsController],
  providers: [SongsService, PrismaService],
  exports: [SongsService],
  imports: [AuthModule, PlaylistsModule],
})
export class SongsModule {}
