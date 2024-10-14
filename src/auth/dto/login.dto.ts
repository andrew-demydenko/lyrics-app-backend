import { IsString, IsEmail, IsArray, IsUUID } from "class-validator";

export class LoginDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
