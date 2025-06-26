import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpStatus,
  UseGuards,
  Query,
} from "@nestjs/common";
import { Request } from "express";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { JWTGuard } from "@/auth/guards/jwt.guard";
import { Prisma } from "@prisma/client";
import { PlaylistsService } from "@/playlists/playlists.service";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";

@UseGuards(JWTGuard)
@Controller("songs")
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    private readonly playlistsService: PlaylistsService
  ) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  async findAll(@Req() request: Request) {
    return this.songsService.findAll();
  }

  @Get("user/:id")
  findUserSongs(@Param("id") id: string) {
    return this.songsService.findAll({ userId: id });
  }

  @Get("shared")
  findSharedSongs(@Query() query: { search?: string }) {
    return this.songsService.findAll({ onlyShared: true, query: query.search });
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.songsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(id, updateSongDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.songsService.remove(id);
  }

  @Post(":id/favorite")
  addToFavorites(@Req() req: AuthenticatedRequest, @Param("id") id: string) {
    return this.playlistsService.addSongToFavorites(req.user.id, id);
  }

  @Delete(":id/favorite")
  removeFromFavorites(
    @Req() req: AuthenticatedRequest,
    @Param("id") id: string
  ) {
    return this.playlistsService.removeSongFromFavorites(req.user.id, id);
  }
}
