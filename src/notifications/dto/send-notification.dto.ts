import { IsString, IsNotEmpty, IsOptional, IsUUID, IsObject } from "class-validator";

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  body: string;

  @IsOptional()
  @IsObject()
  data?: Record<string, any>;

  @IsOptional()
  @IsString()
  sound?: string;

  @IsOptional()
  @IsString()
  categoryId?: string;

  @IsOptional()
  @IsString()
  ttl?: string;

  @IsOptional()
  @IsString()
  expiration?: string;

  @IsOptional()
  priority?: "default" | "normal" | "high";
}

export class SendBulkNotificationDto extends SendNotificationDto {
  @IsUUID("4", { each: true })
  @IsNotEmpty({ each: true })
  userIds: string[];
}
