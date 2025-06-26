import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Request } from '@nestjs/common';
import { JWTGuard } from '../auth/guards/jwt.guard';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { AddSongToPlaylistDto } from './dto/add-song.dto';
import { FindAllPlaylistsDto } from './dto/find-all.dto';
import { AuthenticatedRequest } from '../auth/types/authenticated-request.type';

@UseGuards(JWTGuard)
@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Request() req: AuthenticatedRequest, @Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.create(req.user.id, createPlaylistDto);
  }

  @Get()
  findAll(@Request() req: AuthenticatedRequest, @Query() query: FindAllPlaylistsDto) {
    return this.playlistsService.findAll(req.user.id, query);
  }

  @Get('default')
  findDefault(@Request() req: AuthenticatedRequest) {
    return this.playlistsService.findDefaultPlaylist(req.user.id);
  }

  @Get(':id')
  findOne(@Request() req: AuthenticatedRequest, @Param('id') id: string) {
    return this.playlistsService.findOne(req.user.id, id);
  }

  @Patch(':id')
  update(
    @Request() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() updatePlaylistDto: UpdatePlaylistDto,
  ) {
    return this.playlistsService.update(req.user.id, id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Request() req: AuthenticatedRequest, @Param('id') id: string) {
    return this.playlistsService.remove(req.user.id, id);
  }

  @Post(':id/songs')
  addSong(
    @Request() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Body() addSongDto: AddSongToPlaylistDto,
  ) {
    return this.playlistsService.addSong(req.user.id, id, addSongDto);
  }

  @Delete(':id/songs/:songId')
  removeSong(
    @Request() req: AuthenticatedRequest,
    @Param('id') id: string,
    @Param('songId') songId: string,
  ) {
    return this.playlistsService.removeSong(req.user.id, id, songId);
  }

  @Post('favorites/songs')
  addToFavorites(
    @Request() req: AuthenticatedRequest,
    @Body() addSongDto: AddSongToPlaylistDto,
  ) {
    return this.playlistsService.addSongToFavorites(req.user.id, addSongDto.songId);
  }

  @Delete('favorites/songs/:songId')
  removeFromFavorites(
    @Request() req: AuthenticatedRequest,
    @Param('songId') songId: string,
  ) {
    return this.playlistsService.removeSongFromFavorites(req.user.id, songId);
  }
}
