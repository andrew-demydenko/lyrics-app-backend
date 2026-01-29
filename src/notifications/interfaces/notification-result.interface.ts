export interface NotificationResult {
  success: boolean;
  notificationId?: string;
  expoMessageId?: string;
  error?: string;
  userId?: string;
}

export interface BulkNotificationResult {
  total: number;
  successful: number;
  failed: number;
  results: NotificationResult[];
}

export interface ExpoPushTicket {
  status: "ok" | "error";
  id?: string;
  message?: string;
  details?: {
    error?: string;
    expoPushToken?: string;
    [key: string]: any;
  };
}
