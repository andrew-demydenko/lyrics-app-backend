import { Injectable, HttpException, NotFoundException } from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { FindAllDto } from "./dto/find-all.dto";
import { Prisma, Song } from "@prisma/client";
import { PrismaService } from "@/prisma.service";
import { AccessControlService } from "@/common/services/access-control.service";

@Injectable()
export class SongsService {
  constructor(
    private prisma: PrismaService,
    private accessControlService: AccessControlService
  ) {}

  async create(data: CreateSongDto): Promise<Song> {
    const { name, author, text, chords, userId, shared } = data;

    try {
      const newSong = await this.prisma.song.create({
        data: {
          name,
          author,
          text,
          chords: JSON.stringify(chords),
          userId,
          shared,
        },
      });

      return {
        ...newSong,
        chords: JSON.parse(newSong.chords as string),
      };
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }

  async findAll(data: FindAllDto = {}): Promise<Song[]> {
    const { userId, onlyShared, query } = data;
    let condition: Prisma.SongWhereInput = {};
    if (userId) {
      condition.userId = userId;
    } else if (onlyShared) {
      condition.shared = true;
    }
    if (query && query.trim()) {
      const searchTerms = query
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
    const songs = await this.prisma.song.findMany({
      where: condition,
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return songs.map((song) => ({
      ...song,
      chords: JSON.parse(song.chords as string),
    }));
  }

  async findOne(id: string): Promise<Song> {
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

    return {
      ...song,
      chords: JSON.parse(song.chords as string),
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
        name: updateSongDto.name,
        author: updateSongDto.author,
        text: updateSongDto.text,
        chords: JSON.stringify(updateSongDto.chords),
        shared: updateSongDto.shared,
      },
    });

    return {
      ...updatedSong,
      chords: JSON.parse(updatedSong.chords as string),
    };
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

    return {
      ...updatedSong,
      chords: JSON.parse(updatedSong.chords as string),
    };
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

    return {
      ...updatedSong,
      chords: JSON.parse(updatedSong.chords as string),
    };
  }
}
