import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class FindAllPlaylistsDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  isDefault?: boolean;
}
