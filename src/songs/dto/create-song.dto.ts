import {
  IsString,
  IsNotEmpty,
  IsJSON,
  IsUUID,
  IsBoolean,
} from "class-validator";

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsJSON()
  chords: Record<string, string>;

  @IsUUID()
  userId: string;

  @IsBoolean()
  shared: boolean;
}
