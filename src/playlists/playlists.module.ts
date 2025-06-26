import { Module } from "@nestjs/common";
import { PlaylistsService } from "./playlists.service";
import { PlaylistsController } from "./playlists.controller";
import { PrismaService } from "@/prisma.service";
import { AuthModule } from "@/auth/auth.module";

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService, PrismaService],
  exports: [PlaylistsService],
  imports: [AuthModule],
})
export class PlaylistsModule {}
