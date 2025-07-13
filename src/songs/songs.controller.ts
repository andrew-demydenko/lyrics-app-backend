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
  ForbiddenException,
} from "@nestjs/common";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { JWTGuard } from "@/auth/guards/jwt.guard";
import { Prisma } from "@prisma/client";
import { JwtPayload } from "@/auth/types/jwt-payload.type";
import { AccessControlService } from "@/common/services/access-control.service";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";

@UseGuards(JWTGuard)
@Controller("songs")
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    private readonly accessControlService: AccessControlService
  ) {}

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

  @Patch(":id/verify")
  async toggleVerifiedStatus(
    @Param("id") id: string,
    @Req() request: AuthenticatedRequest,
    @Body() data: { verified: boolean }
  ) {
    const currentUser = request.user as JwtPayload;
    const isAdmin = await this.accessControlService.isUserAdmin(currentUser.id);

    if (!isAdmin) {
      throw new ForbiddenException(
        "Only administrators can change verification status"
      );
    }

    return this.songsService.updateVerifiedStatus(id, data.verified);
  }
}
