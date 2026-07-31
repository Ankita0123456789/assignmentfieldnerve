import { DashboardData, KpiColor } from "../types/vendorDashboard";

export const dashboardData: DashboardData = {
  kpis: [
    {
      id: "total-vendors",
      label: "Total Vendors",
      value: "248",
      change: "+12 this month",
      trend: "up",
      description: "All registered vendors",
      color: "blue",
    },
    {
      id: "active-vendors",
      label: "Active Vendors",
      value: "186",
      change: "+8 this month",
      trend: "up",
      description: "Vendors currently eligible",
      color: "green",
    },
    {
      id: "blacklisted-vendors",
      label: "Blacklisted Vendors",
      value: "14",
      change: "+2 this quarter",
      trend: "down",
      description: "Blocked from new POs",
      color: "red",
    },
    {
      id: "pending-approvals",
      label: "Pending Approvals",
      value: "23",
      change: "-5 vs last week",
      trend: "up",
      description: "Awaiting review",
      color: "orange",
    },
    {
      id: "average-rating",
      label: "Average Vendor Rating",
      value: "4.2",
      change: "+0.1 this quarter",
      trend: "up",
      description: "Across active vendors",
      color: "purple",
    },
    {
      id: "active-pos",
      label: "Active Purchase Orders",
      value: "67",
      change: "+9 this week",
      trend: "up",
      description: "Open / in-progress POs",
      color: "indigo",
    },
  ],
  performanceTrend: [
    { month: "Feb", onTime: 88, quality: 84, rating: 3.9 },
    { month: "Mar", onTime: 90, quality: 86, rating: 4.0 },
    { month: "Apr", onTime: 87, quality: 88, rating: 4.0 },
    { month: "May", onTime: 92, quality: 89, rating: 4.1 },
    { month: "Jun", onTime: 91, quality: 90, rating: 4.1 },
    { month: "Jul", onTime: 94, quality: 91, rating: 4.2 },
  ],
  categoryDistribution: [
    { category: "Raw Materials", count: 42 },
    { category: "IT Services", count: 36 },
    { category: "Logistics", count: 31 },
    { category: "Electronics", count: 28 },
    { category: "Pharmaceuticals", count: 24 },
    { category: "Energy", count: 22 },
    { category: "Construction", count: 27 },
    { category: "Furniture", count: 18 },
    { category: "Chemical & Petrochem", count: 20 },
  ],
};


export const TREND_STYLES = {
  up: "text-emerald-700",
  down: "text-red-700",
  neutral: "text-zinc-500",
};

export const COLOR_STYLES: Record<
  KpiColor,
  { card: string; label: string; value: string; accent: string }
> = {
  blue: {
    card: "border-blue-300 bg-blue-100",
    label: "text-blue-700",
    value: "text-blue-950",
    accent: "bg-blue-600",
  },
  green: {
    card: "border-green-300 bg-green-100",
    label: "text-green-700",
    value: "text-green-950",
    accent: "bg-green-600",
  },
  red: {
    card: "border-red-300 bg-red-100",
    label: "text-red-700",
    value: "text-red-950",
    accent: "bg-red-600",
  },
  purple: {
    card: "border-purple-300 bg-purple-100",
    label: "text-purple-700",
    value: "text-purple-950",
    accent: "bg-purple-600",
  },
  orange: {
    card: "border-orange-300 bg-orange-100",
    label: "text-orange-700",
    value: "text-orange-950",
    accent: "bg-orange-500",
  },
  indigo: {
    card: "border-indigo-300 bg-indigo-100",
    label: "text-indigo-700",
    value: "text-indigo-950",
    accent: "bg-indigo-600",
  },
};

export const CHART_COLORS = [
  "#2563eb", // blue
  "#16a34a", // green
  "#dc2626", // red
  "#9333ea", // purple
  "#ea580c", // orange
  "#4f46e5", // indigo
  "#0891b2", // cyan
  "#db2777", // pink
  "#ca8a04", // yellow
];

export const CHART_SHELL =
  "flex min-h-[280px] flex-col gap-3 border border-zinc-200 bg-white p-4";