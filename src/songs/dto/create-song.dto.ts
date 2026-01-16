import {
  IsString,
  IsNotEmpty,
  IsJSON,
  IsUUID,
  IsBoolean,
  ValidateNested,
  IsArray,
} from "class-validator";
import { Type } from "class-transformer";
import { SongLine } from "../types/song-line.type";

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SongLine)
  lines: SongLine[];

  @IsUUID()
  userId: string;

  @IsBoolean()
  shared: boolean;
}
