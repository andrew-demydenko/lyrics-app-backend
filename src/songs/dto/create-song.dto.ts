import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsBoolean,
  IsArray,
} from "class-validator";
import { SongLine } from "../types/song-line.type";

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsArray()
  lines: SongLine[];

  @IsUUID()
  userId: string;

  @IsBoolean()
  shared: boolean;
}
