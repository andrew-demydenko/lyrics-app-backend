import { Injectable, HttpException, NotFoundException } from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { FindAllDto } from "./dto/find-all.dto";
import { Prisma, Song } from "@prisma/client";
import { PrismaService } from "@/prisma.service";
import { SongLine } from "./types/song-line.type";
import { AccessControlService } from "@/auth/access-control.service";
import { getChordFingers, getSongChords } from "./utils";

@Injectable()
export class SongsService {
  constructor(
    private prisma: PrismaService,
    private accessControlService: AccessControlService,
  ) {}

  private capitalizeWords(str: string): string {
    if (!str) return str;

    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  async create(data: CreateSongDto): Promise<Song> {
    const { lines, userId, shared } = data;

    const name = this.capitalizeWords(data.name);
    const author = this.capitalizeWords(data.author);
    try {
      const newSong = await this.prisma.song.create({
        data: {
          name,
          author,
          lines: JSON.stringify(lines),
          userId,
          shared,
        },
      });

      return newSong;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findAll(data: FindAllDto = {}): Promise<{
    songs: any[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const {
      userId,
      shared,
      search,
      page = 1,
      limit = 20,
      sortBy = "name",
      sortOrder = "asc",
    } = data;

    let condition: Prisma.SongWhereInput = {};
    if (userId) {
      condition.userId = userId;
    } else if (shared) {
      condition.shared = true;
    }

    if (search && search.trim()) {
      const searchTerms = search
        .trim()
        .split(/\s+/)
        .filter((term) => term.length > 0);

      if (searchTerms.length) {
        // Create an array of conditions for each search term
        const searchConditions = searchTerms.map((term) => {
          return {
            OR: [
              // For each term try different variations
              { name: { contains: term.toLowerCase() } },
              {
                name: {
                  contains:
                    term.charAt(0).toUpperCase() + term.slice(1).toLowerCase(),
                },
              },
              { author: { contains: term.toLowerCase() } },
              {
                author: {
                  contains:
                    term.charAt(0).toUpperCase() + term.slice(1).toLowerCase(),
                },
              },
              // Add partial matching
              { name: { startsWith: term.toLowerCase() } },
              { author: { startsWith: term.toLowerCase() } },
            ],
          };
        });

        // Combine all term conditions with OR
        condition = {
          ...condition,
          AND: searchConditions,
        };
      }
    }

    const total = await this.prisma.song.count({ where: condition });
    const totalPages = limit === -1 ? 1 : Math.ceil(total / limit);

    const orderBy: Prisma.SongOrderByWithRelationInput = {};
    if (["name", "author", "createdAt", "views"].includes(sortBy)) {
      orderBy[sortBy] = sortOrder;
    } else {
      orderBy.name = "asc";
    }

    const songs = await this.prisma.song.findMany({
      where: condition,
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy,
      skip: limit === -1 ? 0 : (page - 1) * limit,
      take: limit === -1 ? undefined : limit,
    });

    return {
      songs,
      total,
      page,
      totalPages,
    };
  }

  async findOne(id: string): Promise<any> {
    const song = await this.prisma.song.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!song) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    await this.accessControlService.validateAccess(song.userId, "song");

    return {
      ...song,
      fingers: getChordFingers(getSongChords(JSON.parse(song.lines))),
    };
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    const existingSong = await this.prisma.song.findUnique({
      where: { id },
    });

    if (!existingSong) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    await this.accessControlService.validateAccess(existingSong.userId, "song");

    const updatedSong = await this.prisma.song.update({
      where: { id },
      data: {
        name: this.capitalizeWords(updateSongDto.name),
        author: this.capitalizeWords(updateSongDto.author),
        lines: JSON.stringify(updateSongDto.lines),
        shared: updateSongDto.shared,
      },
    });

    return updatedSong;
  }

  async remove(id: string) {
    const existingSong = await this.prisma.song.findUnique({
      where: { id },
    });

    if (!existingSong) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    await this.accessControlService.validateAccess(existingSong.userId, "song");

    try {
      return await this.prisma.song.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        throw new NotFoundException(`Song with ID ${id} not found`);
      }
      throw error;
    }
  }

  async updateVerifiedStatus(id: string, verified: boolean): Promise<Song> {
    const existingSong = await this.prisma.song.findUnique({
      where: { id },
    });

    if (!existingSong) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    const updatedSong = await this.prisma.song.update({
      where: { id },
      data: { verified },
    });

    return updatedSong;
  }

  async incrementViewCount(id: string): Promise<Song> {
    const existingSong = await this.prisma.song.findUnique({
      where: { id },
    });

    if (!existingSong) {
      throw new NotFoundException(`Song with ID ${id} not found`);
    }

    const updatedSong = await this.prisma.song.update({
      where: { id },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return updatedSong;
  }

  async findManyByIds(ids: string[], userId: string): Promise<any[]> {
    const isAdmin = await this.accessControlService.isUserAdmin(userId);

    const songs = await this.prisma.song.findMany({
      where: {
        id: { in: ids },
        OR: isAdmin ? undefined : [{ shared: true }, { userId }],
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return songs;
  }

  async importSongs(
    songs: { name: string; author: string; text: string; lines: SongLine[] }[],
    userId: string,
  ): Promise<{ imported: number; skipped: number; errors: string[] }> {
    const result = {
      imported: 0,
      skipped: 0,
      errors: [],
    };

    for (const songData of songs) {
      try {
        const existingSong = await this.prisma.song.findFirst({
          where: {
            name: songData.name,
            author: songData.author,
          },
        });

        if (existingSong) {
          result.skipped++;
          continue;
        }

        await this.prisma.song.create({
          data: {
            name: songData.name,
            author: songData.author,
            lines: JSON.stringify(songData.lines),
            shared: true,
            verified: true,
            userId,
          },
        });

        result.imported++;
      } catch (error) {
        const errorMessage = `Ошибка при импорте песни "${songData.name}": ${error.message}`;
        result.errors.push(errorMessage);
        console.error(errorMessage);
      }
    }

    return result;
  }
}
