import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { UpdatePlaylistDto } from "./dto/update-playlist.dto";
import { AddSongToPlaylistDto } from "./dto/add-song.dto";
import { FindAllPlaylistsDto } from "./dto/find-all.dto";

@Injectable()
export class PlaylistsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createPlaylistDto: CreatePlaylistDto) {
    if (createPlaylistDto.isDefault) {
      await this.prisma.playlist.updateMany({
        where: { userId, isDefault: true },
        data: { isDefault: false },
      });
    }

    return this.prisma.playlist.create({
      data: {
        ...createPlaylistDto,
        user: { connect: { id: userId } },
      },
    });
  }

  async findAll(userId: string, params: FindAllPlaylistsDto = {}) {
    const { name, isDefault } = params;

    const where = {
      userId,
      ...(name
        ? { name: { contains: name, mode: "insensitive" as const } }
        : {}),
      ...(isDefault !== undefined ? { isDefault } : {}),
    };

    return this.prisma.playlist.findMany({
      where,
      include: {
        songs: true,
      },
    });
  }

  async findOne(userId: string, id: string) {
    const playlist = await this.prisma.playlist.findFirst({
      where: { id, userId },
      include: {
        songs: true,
      },
    });

    if (!playlist) {
      throw new NotFoundException(`Playlist with ID ${id} not found`);
    }

    return playlist;
  }

  async findDefaultPlaylist(userId: string) {
    let defaultPlaylist = await this.prisma.playlist.findFirst({
      where: { userId, isDefault: true },
      include: {
        songs: true,
      },
    });

    if (!defaultPlaylist) {
      defaultPlaylist = await this.prisma.playlist.create({
        data: {
          name: "Favorites",
          isDefault: true,
          user: { connect: { id: userId } },
        },
        include: {
          songs: true,
        },
      });
    }

    return defaultPlaylist;
  }

  async update(
    userId: string,
    id: string,
    updatePlaylistDto: UpdatePlaylistDto
  ) {
    await this.findOne(userId, id);

    if (updatePlaylistDto.isDefault) {
      await this.prisma.playlist.updateMany({
        where: { userId, isDefault: true, NOT: { id } },
        data: { isDefault: false },
      });
    }

    return this.prisma.playlist.update({
      where: { id },
      data: updatePlaylistDto,
      include: {
        songs: true,
      },
    });
  }

  async remove(userId: string, id: string) {
    const playlist = await this.findOne(userId, id);

    if (playlist.isDefault) {
      throw new Error("Default playlist cannot be deleted");
    }

    return this.prisma.playlist.delete({
      where: { id },
    });
  }

  async addSong(userId: string, playlistId: string, dto: AddSongToPlaylistDto) {
    await this.findOne(userId, playlistId);

    const song = await this.prisma.song.findFirst({
      where: {
        id: dto.songId,
        OR: [{ userId }, { shared: true }],
      },
    });

    if (!song) {
      throw new NotFoundException(
        `Song with ID ${dto.songId} not found or not accessible`
      );
    }

    await this.prisma.playlist.update({
      where: { id: playlistId },
      data: {
        songs: {
          connect: { id: dto.songId },
        },
      },
    });

    return this.findOne(userId, playlistId);
  }

  async removeSong(userId: string, playlistId: string, songId: string) {
    await this.findOne(userId, playlistId);

    await this.prisma.playlist.update({
      where: { id: playlistId },
      data: {
        songs: {
          disconnect: { id: songId },
        },
      },
    });

    return this.findOne(userId, playlistId);
  }

  async addSongToFavorites(userId: string, songId: string) {
    const favoritesPlaylist = await this.findDefaultPlaylist(userId);

    return this.addSong(userId, favoritesPlaylist.id, { songId });
  }

  async removeSongFromFavorites(userId: string, songId: string) {
    const favoritesPlaylist = await this.findDefaultPlaylist(userId);

    return this.removeSong(userId, favoritesPlaylist.id, songId);
  }
}
