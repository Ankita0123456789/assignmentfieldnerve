import { STATUS_TAG_STYLES } from "../../defaultValues/vendorApproval";
import { TagProps } from "../../types/vendorApproval";

const Tag = ({ status }: TagProps) => {
  return (
    <span
      className={`inline-flex rounded border px-2.5 py-1 text-xs font-medium ${STATUS_TAG_STYLES[status]}`}
    >
      {status}
    </span>
  );
};

export default Tag;
