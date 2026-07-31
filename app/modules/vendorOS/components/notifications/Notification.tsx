"use client";

import { useEffect, useMemo, useState } from "react";
import { NOTIFICATION_TYPES } from "../../defaultValues/vendorNotification";
import {
  NotificationFilter,
  NotificationItem,
  NotificationType,
} from "../../types/vendorNotification";
import {
  loadNotifications,
} from "../../utils/vendorNotification";
import NotificationRow from "./NotificationRow";
import NotificationTag from "./NotificationTag";
import Header from "@/app/Components/Header/Header";

const Notification = () => {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [filter, setFilter] = useState<NotificationFilter>("Unread");

  useEffect(() => {
    const fetchItems = async () => {
      const items = await loadNotifications();
      setItems((prev) => [...prev, ...items]);
    };
    fetchItems();
  }, []);

  const unreadCount = useMemo(
    () => items.filter((item) => !item.read).length,
    [items],
  );

  const filteredItems = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((item) => !item.read);
  }, [items, filter]);

  const groupedByType = useMemo(() => {
    return NOTIFICATION_TYPES.reduce(
      (acc, type) => {
        acc[type] = filteredItems.filter((item) => item.type === type);
        return acc;
      },
      {} as Record<NotificationType, NotificationItem[]>,
    );
  }, [filteredItems]);

  const handleMarkRead = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );
  };

  const handleMarkAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <Header title="Notifications" description="Track approvals, documents, ratings, deliveries, and payments." />
        {unreadCount > 0 && (
          <button
            type="button"
            onClick={handleMarkAllRead}
            className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="border-b border-zinc-200">
        <div className="flex gap-1" role="tablist" aria-label="Notification filters">
          {(["Unread", "All"] as NotificationFilter[]).map((option) => {
            const isActive = filter === option;
            const count = option === "Unread" ? unreadCount : items.length;
            return (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(option)}
                className={`border-b-2 px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "border-zinc-900 font-medium text-zinc-900"
                    : "border-transparent text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {option} ({count})
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" className="flex flex-col gap-8">
        {filteredItems.length === 0 ? (
          <p className="py-6 text-sm text-zinc-500">
            No {filter === "Unread" ? "unread " : ""}notifications.
          </p>
        ) : (
          NOTIFICATION_TYPES.map((type) => {
            const typeItems = groupedByType[type];
            if (typeItems.length === 0) return null;

            return (
              <section key={type} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <NotificationTag type={type} />
                  <span className="text-xs text-zinc-500">
                    {typeItems.length}
                  </span>
                </div>
                <ul>
                  {typeItems.map((item) => (
                    <NotificationRow
                      key={item.id}
                      item={item}
                      onMarkRead={handleMarkRead}
                    />
                  ))}
                </ul>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Notification;
