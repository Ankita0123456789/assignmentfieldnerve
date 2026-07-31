import { PerformanceCardProps } from "../../types/vendorPerformance";
import {
  PERFORMANCE_COLOR_STYLES,
  PERFORMANCE_TREND_STYLES,
} from "../../defaultValues/vendorPerformance";

const Card = ({
  label,
  value,
  change,
  trend,
  description,
  color,
}: PerformanceCardProps) => {
  const styles = PERFORMANCE_COLOR_STYLES[color];

  return (
    <article
      className={`relative flex flex-col gap-3 overflow-hidden border p-4 ${styles.card}`}
    >
      <span className={`absolute inset-y-0 left-0 w-1.5 ${styles.accent}`} />
      <div className="flex items-start justify-between gap-3 pl-2">
        <p className={`text-xs font-medium tracking-wide uppercase ${styles.label}`}>
          {label}
        </p>
        <span className={`text-xs font-medium ${PERFORMANCE_TREND_STYLES[trend]}`}>
          {change}
        </span>
      </div>
      <p className={`pl-2 text-3xl font-semibold tracking-tight ${styles.value}`}>
        {value}
      </p>
      <p className="pl-2 text-sm text-zinc-700">{description}</p>
    </article>
  );
};

export default Card;
