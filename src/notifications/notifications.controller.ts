import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { RegisterPushTokenDto } from "./dto/register-push-token.dto";
import {
  SendNotificationDto,
  SendBulkNotificationDto,
} from "./dto/send-notification.dto";
import { JWTGuard } from "@/auth/guards/jwt.guard";

@Controller("notifications")
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @UseGuards(JWTGuard)
  @Post("register-token")
  async registerToken(
    @Body() registerPushTokenDto: RegisterPushTokenDto,
    @Req() req: any,
  ) {
    const userId = req.user.id;
    await this.notificationsService.registerPushToken(
      userId,
      registerPushTokenDto.token,
    );
    return { message: "Push token registered successfully" };
  }

  @UseGuards(JWTGuard)
  @Post("unregister-token")
  async unregisterToken(@Req() req: any) {
    const userId = req.user.id;
    await this.notificationsService.unregisterPushToken(userId);
    return { message: "Push token unregistered successfully" };
  }

  @UseGuards(JWTGuard)
  @Post("send/:userId")
  async sendNotification(
    @Param("userId") userId: string,
    @Body() sendNotificationDto: SendNotificationDto,
    @Req() req: any,
  ) {
    return this.notificationsService.sendNotification(
      userId,
      sendNotificationDto,
    );
  }

  @UseGuards(JWTGuard)
  @Post("send-bulk")
  async sendBulkNotifications(
    @Body() sendBulkNotificationDto: SendBulkNotificationDto,
    @Req() req: any,
  ) {
    return this.notificationsService.sendBulkNotifications(
      sendBulkNotificationDto,
      req.user,
    );
  }

  @UseGuards(JWTGuard)
  @Get("history/:userId")
  async getNotificationHistory(
    @Param("userId") userId: string,
    @Req() req: any,
  ) {
    return this.notificationsService.getNotificationHistory(
      userId,
      req.user.id,
    );
  }

  @UseGuards(JWTGuard)
  @Post("retry-failed")
  async retryFailedNotifications(@Req() req: any) {
    return this.notificationsService.retryFailedNotifications(req.user);
  }
}
