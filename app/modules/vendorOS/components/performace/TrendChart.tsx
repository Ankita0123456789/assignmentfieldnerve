"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TREND_SERIES_CONFIG } from "../../defaultValues/vendorPerformance";
import { TrendChartProps } from "../../types/vendorPerformance";

const TrendChart = ({ data }: TrendChartProps) => {
  return (
    <section className="flex min-h-[320px] flex-col gap-3 border border-zinc-200 bg-white p-4">
      <div>
        <h3 className="text-sm font-semibold text-zinc-900">Trend Graph</h3>
        <p className="mt-1 text-sm text-zinc-600">
          Quality, delivery, response, risk, and rating over the last 6 months
        </p>
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e4e4e7" strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={{ stroke: "#d4d4d8" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#71717a", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                border: "1px solid #e4e4e7",
                borderRadius: 0,
                fontSize: 12,
              }}
            />
            {TREND_SERIES_CONFIG.map((series) => (
              <Line
                key={series.dataKey}
                type="monotone"
                dataKey={series.dataKey}
                name={series.label}
                stroke={series.color}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ul className="flex flex-wrap gap-4 text-xs text-zinc-600">
        {TREND_SERIES_CONFIG.map((series) => (
          <li key={series.dataKey} className="flex items-center gap-2">
            <span
              className="size-2 shrink-0"
              style={{ backgroundColor: series.color }}
            />
            {series.label}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendChart;
