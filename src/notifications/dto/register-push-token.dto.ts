import { IsString, IsNotEmpty, Matches } from "class-validator";

export class RegisterPushTokenDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^ExponentPushToken\[.*\]$/, {
    message: "Invalid Expo push token format",
  })
  token: string;
}
