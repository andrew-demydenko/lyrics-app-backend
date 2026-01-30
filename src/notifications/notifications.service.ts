import { Injectable, Logger, BadRequestException } from "@nestjs/common";
import { Expo } from "expo-server-sdk";
import { PrismaService } from "@/prisma.service";
import { AccessControlService } from "@/auth/access-control.service";
import {
  SendNotificationDto,
  SendBulkNotificationDto,
} from "./dto/send-notification.dto";
import {
  NotificationResult,
  BulkNotificationResult,
  ExpoPushTicket,
} from "./interfaces/notification-result.interface";

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  private expo: Expo;

  constructor(
    private prisma: PrismaService,
    private accessControlService: AccessControlService,
  ) {
    this.expo = new Expo({
      useFcmV1: true,
    });
  }

  async registerPushToken(userId: string, token: string): Promise<void> {
    if (!Expo.isExpoPushToken(token)) {
      throw new BadRequestException("Invalid Expo push token format");
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { expoPushToken: token },
    });

    this.logger.log(`Registered push token for user ${userId}`);
  }

  async unregisterPushToken(userId: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { expoPushToken: null },
    });

    this.logger.log(`Unregistered push token for user ${userId}`);
  }

  async sendNotification(
    userId: string,
    dto: SendNotificationDto,
  ): Promise<NotificationResult> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found",
        userId,
      };
    }

    if (!user.expoPushToken) {
      return {
        success: false,
        error: "User has no registered push token",
        userId,
      };
    }

    const notification = await this.prisma.notification.create({
      data: {
        userId,
        title: dto.title,
        body: dto.body,
        data: dto.data ? JSON.stringify(dto.data) : null,
        expoPushToken: user.expoPushToken,
        status: "pending",
      },
    });

    const message = {
      to: user.expoPushToken,
      sound: dto.sound || "default",
      title: dto.title,
      body: dto.body,
      data: dto.data || {},
      ttl: dto.ttl ? parseInt(dto.ttl) : undefined,
      expiration: dto.expiration ? parseInt(dto.expiration) : undefined,
      priority: dto.priority || "high",
      categoryId: dto.categoryId,
    };

    const result = await this.sendPushMessage(notification.id, message);

    return {
      ...result,
      userId,
    };
  }

  async sendBulkNotifications(
    dto: SendBulkNotificationDto,
  ): Promise<BulkNotificationResult> {
    const results: NotificationResult[] = [];
    let successful = 0;
    let failed = 0;

    for (const userId of dto.userIds) {
      const result = await this.sendNotification(userId, dto);
      results.push(result);

      if (result.success) {
        successful++;
      } else {
        failed++;
      }
    }

    return {
      total: dto.userIds.length,
      successful,
      failed,
      results,
    };
  }

  async getNotificationHistory(userId: string, requesterId: string) {
    const isOwner = userId === requesterId;
    const isAdmin = await this.accessControlService.isUserAdmin(requesterId);

    if (!isOwner && !isAdmin) {
      throw new BadRequestException("Access denied");
    }

    const notifications = await this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return notifications.map((notif) => ({
      ...notif,
      data: notif.data ? JSON.parse(notif.data) : null,
    }));
  }

  async retryFailedNotifications(): Promise<BulkNotificationResult> {
    const maxRetries = 3;

    const failedNotifications = await this.prisma.notification.findMany({
      where: {
        status: "failed",
        retryCount: { lt: maxRetries },
      },
      include: { user: true },
    });

    const results: NotificationResult[] = [];
    let successful = 0;
    let failed = 0;

    for (const notification of failedNotifications) {
      if (!notification.user?.expoPushToken) {
        continue;
      }

      const message = {
        to: notification.user.expoPushToken,
        sound: "default",
        title: notification.title,
        body: notification.body,
        data: notification.data ? JSON.parse(notification.data) : {},
      };

      const result = await this.sendPushMessage(notification.id, message);
      results.push({ ...result, userId: notification.userId });

      if (result.success) {
        successful++;
      } else {
        failed++;
      }

      await this.sleep(1000);
    }

    return {
      total: failedNotifications.length,
      successful,
      failed,
      results,
    };
  }

  private async sendPushMessage(
    notificationId: string,
    message: any,
  ): Promise<NotificationResult> {
    try {
      const tickets = await this.expo.sendPushNotificationsAsync([message]);
      const ticket = tickets[0] as ExpoPushTicket;

      if (ticket.status === "ok") {
        await this.prisma.notification.update({
          where: { id: notificationId },
          data: {
            status: "sent",
            expoMessageId: ticket.id || "sent",
            sentAt: new Date(),
          },
        });

        return {
          success: true,
          notificationId,
          expoMessageId: ticket.id,
        };
      } else if (ticket.status === "error") {
        const errorMsg = ticket.details?.error || "Unknown error";

        await this.prisma.notification.update({
          where: { id: notificationId },
          data: {
            status: "failed",
            errorMessage: errorMsg,
            retryCount: { increment: 1 },
          },
        });

        if (
          errorMsg === "DeviceNotRegistered" ||
          errorMsg === "MessageTooBig"
        ) {
          await this.handleInvalidToken(message.to);
        }

        return {
          success: false,
          notificationId,
          error: errorMsg,
        };
      }
    } catch (error) {
      this.logger.error(`Failed to send notification: ${error.message}`);

      await this.prisma.notification.update({
        where: { id: notificationId },
        data: {
          status: "failed",
          errorMessage: error.message,
          retryCount: { increment: 1 },
        },
      });

      return {
        success: false,
        notificationId,
        error: error.message,
      };
    }
  }

  private async handleInvalidToken(token: string): Promise<void> {
    await this.prisma.user.updateMany({
      where: { expoPushToken: token },
      data: { expoPushToken: null },
    });

    this.logger.warn(`Removed invalid push token: ${token}`);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
