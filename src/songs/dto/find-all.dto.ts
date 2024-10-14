import { IsString, IsUUID, IsBoolean } from "class-validator";

export class FindAllDto {
  @IsString()
  query?: string;

  @IsUUID()
  userId?: string;

  @IsBoolean()
  onlyShared?: boolean;
}
