import {
  initialNotifications,
  NOTIFICATION_STORAGE_KEY,
} from "../defaultValues/vendorNotification";
import { NotificationItem } from "../types/vendorNotification";

export function loadNotifications(): NotificationItem[] {
  if (typeof window === "undefined") {
    return initialNotifications;
  }

  try {
    const stored = window.localStorage.getItem(NOTIFICATION_STORAGE_KEY);
    if (!stored) {
      return initialNotifications;
    }
    return JSON.parse(stored) as NotificationItem[];
  } catch {
    return initialNotifications;
  }
}

export function saveNotifications(items: NotificationItem[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(items));
}
