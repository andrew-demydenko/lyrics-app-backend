import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  password?: string;

  @IsEmail()
  email: string;

  @IsString()
  googleId?: string;

  @IsString()
  provider?: string;

  isVerified?: boolean;
}
