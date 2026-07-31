export type NotificationType =
  | "Approval Pending"
  | "Document Expiring"
  | "Low Vendor Rating"
  | "Delayed Delivery"
  | "Payment Due";

export type NotificationFilter = "Unread" | "All";

export interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  vendorName: string;
  createdAt: string;
  read: boolean;
}

export interface NotificationTagProps {
  type: NotificationType;
}

export interface NotificationRowProps {
  item: NotificationItem;
  onMarkRead: (id: string) => void;
}
