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

  chords: Record<string, string>; // Удален декоратор IsJSON для поддержки прямой работы с объектами

  @IsUUID()
  userId: string;

  @IsBoolean()
  shared: boolean;
}
