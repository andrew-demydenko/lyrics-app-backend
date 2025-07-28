import { IsArray, IsString } from "class-validator";

export class GetSongsByIdsDto {
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}
