import {
  IsOptional,
  IsString,
  IsUUID,
  IsBoolean,
  IsNumber,
  IsIn,
} from "class-validator";
import { Type } from "class-transformer";

export class FindAllDto {
  @IsString()
  @IsOptional()
  search?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsOptional()
  @IsBoolean()
  shared?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number = 20;

  @IsOptional()
  @IsString()
  @IsIn(["name", "author", "createdAt", "views"])
  sortBy?: string = "name";

  @IsOptional()
  @IsString()
  @IsIn(["asc", "desc"])
  sortOrder?: "asc" | "desc" = "asc";
}
