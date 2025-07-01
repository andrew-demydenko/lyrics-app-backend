import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Query,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { JWTGuard } from "@/auth/guards/jwt.guard";
import { Prisma } from "@prisma/client";

@UseGuards(JWTGuard)
@Controller("songs")
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
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
}
