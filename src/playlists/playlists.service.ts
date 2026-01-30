import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "@/prisma.service";
import { CreatePlaylistDto } from "./dto/create-playlist.dto";
import { UpdatePlaylistDto } from "./dto/update-playlist.dto";
import { FindAllPlaylistsDto } from "./dto/find-all.dto";
import { AccessControlService } from "@/auth/access-control.service";

@Injectable()
export class PlaylistsService {
  constructor(
    private prisma: PrismaService,
    private accessControlService: AccessControlService,
  ) {}

  async create(userId: string, createPlaylistDto: CreatePlaylistDto) {
    const existingPlaylist = await this.prisma.playlist.findFirst({
      where: {
        userId: userId,
        name: createPlaylistDto.name,
      },
    });

    if (existingPlaylist) {
      throw new ConflictException(
        `Playlist with name "${createPlaylistDto.name}" already exists`,
      );
    }
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

    const where = { userId } as Prisma.PlaylistWhereInput;

    if (name) {
      where.name = {
        contains: name,
      };
    }

    if (isDefault) {
      where.isDefault = isDefault;
    }

    return this.prisma.playlist.findMany({
      where,
      include: {
        songs: true,
      },
    });
  }

  async findOne(id: string) {
    const playlist = await this.prisma.playlist.findUnique({
      where: { id },
      include: {
        songs: true,
      },
    });

    if (!playlist) {
      throw new NotFoundException(`Playlist with ID ${id} not found`);
    }

    await this.accessControlService.validateAccess(playlist.userId, "playlist");

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
      defaultPlaylist = await this.prisma.playlist.findFirst({
        where: { userId },
        include: {
          songs: true,
        },
        orderBy: { createdAt: "asc" },
      });
    }

    return defaultPlaylist;
  }

  async update(id: string, updatePlaylistDto: UpdatePlaylistDto) {
    const playlist = await this.findOne(id);

    await this.accessControlService.validateAccess(playlist.userId, "playlist");

    if (updatePlaylistDto.isDefault) {
      await this.prisma.playlist.updateMany({
        where: { userId: playlist.userId, isDefault: true, NOT: { id } },
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

  async remove(id: string) {
    const playlist = await this.findOne(id);

    await this.accessControlService.validateAccess(playlist.userId, "playlist");

    if (playlist.isDefault) {
      throw new Error("Default playlist cannot be deleted");
    }

    return this.prisma.playlist.delete({
      where: { id },
    });
  }

  async addSong(playlistId: string, songId: string) {
    const playlist = await this.findOne(playlistId);

    await this.accessControlService.validateAccess(playlist.userId, "playlist");

    const song = await this.prisma.song.findFirst({
      where: {
        id: songId,
      },
    });

    if (!song) {
      throw new NotFoundException(
        `Song with ID ${songId} not found or not accessible`,
      );
    }

    await this.prisma.playlist.update({
      where: { id: playlistId },
      data: {
        songs: {
          connect: { id: songId },
        },
      },
    });

    return playlist;
  }

  async removeSong(playlistId: string, songId: string) {
    const playlist = await this.findOne(playlistId);

    await this.accessControlService.validateAccess(playlist.userId, "playlist");

    const result = await this.prisma.playlist.update({
      where: { id: playlistId },
      data: {
        songs: {
          disconnect: { id: songId },
        },
      },
    });

    return result;
  }

  async setDefaultPlaylist(id: string) {
    const playlist = await this.findOne(id);

    await this.accessControlService.validateAccess(playlist.userId, "playlist");

    await this.prisma.playlist.updateMany({
      where: { userId: playlist.userId, isDefault: true },
      data: { isDefault: false },
    });

    return this.prisma.playlist.update({
      where: { id },
      data: { isDefault: true },
      include: {
        songs: true,
      },
    });
  }
}
