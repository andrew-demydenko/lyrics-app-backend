import { IsNotEmpty, IsString } from 'class-validator';

export class AddSongToPlaylistDto {
  @IsString()
  @IsNotEmpty()
  songId: string;
}
