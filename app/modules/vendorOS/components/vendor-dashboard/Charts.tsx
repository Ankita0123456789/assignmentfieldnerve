"use client";

import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartsProps,
} from "../../types/vendorDashboard";
import { CHART_COLORS, CHART_SHELL } from "../../defaultValues/vendorDashboard";

const Charts = ({
  performanceTrend,
  categoryDistribution,
}: ChartsProps) => {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <section className={CHART_SHELL}>
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">
            Vendor Performance Trend
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            On-time delivery, quality score, and average rating
          </p>
        </div>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceTrend}>
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
              <Line
                type="monotone"
                dataKey="onTime"
                name="On-time %"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="quality"
                name="Quality %"
                stroke="#16a34a"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="rating"
                name="Rating"
                stroke="#9333ea"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className={CHART_SHELL}>
        <div>
          <h3 className="text-sm font-semibold text-zinc-900">
            Category-wise Vendor Distribution
          </h3>
          <p className="mt-1 text-sm text-zinc-600">
            Share of vendors across procurement categories
          </p>
        </div>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryDistribution}
                dataKey="count"
                nameKey="category"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={2}
              >
                {categoryDistribution.map((entry, index) => (
                  <Cell
                    key={entry.category}
                    fill={CHART_COLORS[index % CHART_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  border: "1px solid #e4e4e7",
                  borderRadius: 0,
                  fontSize: 12,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-zinc-600 sm:grid-cols-3">
          {categoryDistribution.map((item, index) => (
            <li key={item.category} className="flex items-center gap-2">
              <span
                className="size-2 shrink-0"
                style={{
                  backgroundColor: CHART_COLORS[index % CHART_COLORS.length],
                }}
              />
              <span className="truncate">
                {item.category} ({item.count})
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Charts;
