import { NotificationRowProps } from "../../types/vendorNotification";

const NotificationRow = ({ item, onMarkRead }: NotificationRowProps) => {
  return (
    <li
      className={`flex flex-wrap items-start justify-between gap-3 border-b border-zinc-200 px-1 py-4 last:border-b-0 ${
        item.read ? "bg-transparent" : "bg-blue-50/30"
      }`}
    >
      <div className="min-w-0 flex-1">
        {!item.read && (
          <span className="text-[10px] font-medium tracking-wide text-blue-700 uppercase">
            Unread
          </span>
        )}
        <p
          className={`text-sm font-medium text-zinc-900 ${item.read ? "" : "mt-1"}`}
        >
          {item.title}
        </p>
        <p className="mt-1 text-sm text-zinc-600">{item.message}</p>
        <p className="mt-2 text-xs text-zinc-500">
          {item.vendorName} · {item.createdAt}
        </p>
      </div>

      {!item.read && (
        <button
          type="button"
          onClick={() => onMarkRead(item.id)}
          className="shrink-0 text-sm text-zinc-600 underline-offset-2 hover:text-zinc-900 hover:underline"
        >
          Mark as read
        </button>
      )}
    </li>
  );
};

export default NotificationRow;
