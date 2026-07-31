"use client";

import { dashboardData } from "../../defaultValues/vendorDashboard";
import Card from "./Card";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
          Vendor Dashboard
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          Track vendor health, spend, ratings, and approval workload.
        </p>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardData.kpis.map((kpi) => (
          <Card
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            description={kpi.description}
            color={kpi.color}
          />
        ))}
      </section>

      <Charts
        performanceTrend={dashboardData.performanceTrend}
        categoryDistribution={dashboardData.categoryDistribution}
      />
    </div>
  );
};

export default Dashboard;
