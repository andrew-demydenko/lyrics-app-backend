import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from "@nestjs/common";
import { JWTGuard } from "../auth/guards/jwt.guard";
import { PlaylistsService } from "./playlists.service";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { UpdatePlaylistDto } from "./dto/update-playlist.dto";
import { AddSongToPlaylistDto } from "./dto/add-song.dto";
import { FindAllPlaylistsDto } from "./dto/find-all.dto";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { JwtPayload } from "../auth/types/jwt-payload.type";

@UseGuards(JWTGuard)
@Controller("playlists")
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(
    @CurrentUser() currentUser: JwtPayload,
    @Body() createPlaylistDto: CreatePlaylistDto
  ) {
    return this.playlistsService.create(currentUser.id, createPlaylistDto);
  }

  @Get()
  findAll(
    @CurrentUser() currentUser: JwtPayload,
    @Query() query: FindAllPlaylistsDto
  ) {
    return this.playlistsService.findAll(currentUser.id, query);
  }

  @Get("default")
  findDefault(@CurrentUser() currentUser: JwtPayload) {
    return this.playlistsService.findDefaultPlaylist(currentUser.id);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.playlistsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto
  ) {
    return this.playlistsService.update(id, updatePlaylistDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.playlistsService.remove(id);
  }

  @Post(":id/songs")
  addSong(@Param("id") id: string, @Body() addSongDto: AddSongToPlaylistDto) {
    return this.playlistsService.addSong(id, addSongDto.songId);
  }

  @Delete(":id/songs/:songId")
  removeSong(@Param("id") id: string, @Param("songId") songId: string) {
    return this.playlistsService.removeSong(id, songId);
  }

  @Post("favorites/songs")
  addToFavorites(
    @CurrentUser() currentUser: JwtPayload,
    @Body() addSongDto: AddSongToPlaylistDto
  ) {
    return this.playlistsService.addSongToFavorites(
      currentUser.id,
      addSongDto.songId
    );
  }

  @Delete("favorites/songs/:songId")
  removeFromFavorites(
    @CurrentUser() currentUser: JwtPayload,
    @Param("songId") songId: string
  ) {
    return this.playlistsService.removeSongFromFavorites(
      currentUser.id,
      songId
    );
  }
}
