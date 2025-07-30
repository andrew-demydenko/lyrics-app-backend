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
  UseInterceptors,
  UploadedFiles,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { SongsService } from "./songs.service";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { FindAllDto } from "./dto/find-all.dto";
import { GetSongsByIdsDto } from "./dto/get-songs-by-ids.dto";
import { JWTGuard } from "@/auth/guards/jwt.guard";
import { JwtPayload } from "@/auth/types/jwt-payload.type";
import { AccessControlService } from "@/common/services/access-control.service";
import { FileUploadService } from "@/common/services/file-upload.service";
import { AuthenticatedRequest } from "@/auth/types/authenticated-request.type";

@UseGuards(JWTGuard)
@Controller("songs")
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    private readonly accessControlService: AccessControlService,
    private readonly fileUploadService: FileUploadService
  ) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get("user/:id")
  findUserSongs(@Param("id") id: string, @Query() findAllDto: FindAllDto) {
    return this.songsService.findAll({ ...findAllDto, userId: id });
  }

  @Get("shared")
  findSharedSongs(@Query() findAllDto: FindAllDto) {
    return this.songsService.findAll({ ...findAllDto, shared: true });
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

  @Post(":id/view")
  incrementViewCount(@Param("id") id: string) {
    return this.songsService.incrementViewCount(id);
  }

  @Post("by-ids")
  findManyByIds(
    @Body() getSongsByIdsDto: GetSongsByIdsDto,
    @Req() request: AuthenticatedRequest
  ) {
    const currentUser = request.user as JwtPayload;
    return this.songsService.findManyByIds(
      getSongsByIdsDto.ids,
      currentUser.id
    );
  }

  @Post("import")
  @UseInterceptors(
    FilesInterceptor("files", 10, FileUploadService.multerOptions)
  )
  async importSongsFromFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Req() request: AuthenticatedRequest
  ) {
    const currentUser = request.user as JwtPayload;
    const isAdmin = await this.accessControlService.isUserAdmin(currentUser.id);

    if (!isAdmin) {
      throw new ForbiddenException(
        "Only administrators can import songs from files"
      );
    }

    const result = {
      processed: 0,
      imported: 0,
      skipped: 0,
      errors: [],
    };

    try {
      for (const file of files) {
        result.processed++;

        try {
          const songs = this.fileUploadService.readJsonFile<any[]>(file.path);

          if (!Array.isArray(songs)) {
            result.errors.push(
              `Файл ${file.originalname} должен содержать массив песен`
            );
            continue;
          }

          const importResult = await this.songsService.importSongs(
            songs,
            currentUser.id
          );

          result.imported += importResult.imported;
          result.skipped += importResult.skipped;

          if (importResult.errors.length > 0) {
            result.errors.push(...importResult.errors);
          }
        } catch (error) {
          result.errors.push(
            `Ошибка обработки файла ${file.originalname}: ${error.message}`
          );
        } finally {
          this.fileUploadService.removeFile(file.path);
        }
      }
    } catch (error) {
      result.errors.push(`Общая ошибка обработки файлов: ${error.message}`);
    }

    return result;
  }
}
