import { NOTIFICATION_TYPE_STYLES } from "../../defaultValues/vendorNotification";
import { NotificationTagProps } from "../../types/vendorNotification";

const NotificationTag = ({ type }: NotificationTagProps) => {
  return (
    <span
      className={`inline-flex rounded border px-2.5 py-1 text-xs font-medium ${NOTIFICATION_TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
};

export default NotificationTag;
