"use client";

import { performanceData } from "../../defaultValues/vendorPerformance";
import Card from "./Card";
import RecentIssues from "./RecentIssues";
import TrendChart from "./TrendChart";
import Header from "@/app/Components/Header/Header";

const Performance = () => {
  return (
    <div className="flex flex-col gap-6">
      <Header title="Vendor Performance" description="Monitor quality, delivery, risk, and recent issues across vendors." />
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {performanceData.metrics.map((metric) => (
          <Card
            key={metric.id}
            label={metric.label}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            description={metric.description}
            color={metric.color}
          />
        ))}
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <TrendChart data={performanceData.trend} />
        <RecentIssues issues={performanceData.recentIssues} />
      </div>
    </div>
  );
};

export default Performance;
