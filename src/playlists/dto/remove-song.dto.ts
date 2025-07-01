import { IsNotEmpty, IsString } from "class-validator";

export class RemoveSongFromPlaylistDto {
  @IsString()
  @IsNotEmpty()
  songId: string;
}
