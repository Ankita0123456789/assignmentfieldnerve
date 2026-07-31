import { PerformanceColor, PerformanceData, TrendSeriesConfig } from "../types/vendorPerformance";

export const performanceData: PerformanceData = {
  metrics: [
    {
      id: "quality-score",
      label: "Quality Score",
      value: "91%",
      change: "+3% this quarter",
      trend: "up",
      description: "Defect-free deliveries",
      color: "green",
    },
    {
      id: "delivery-score",
      label: "Delivery Score",
      value: "94%",
      change: "+2% this quarter",
      trend: "up",
      description: "On-time shipment rate",
      color: "blue",
    },
    {
      id: "response-time",
      label: "Response Time",
      value: "1.8d",
      change: "-0.4d vs last month",
      trend: "up",
      description: "Avg. reply turnaround",
      color: "indigo",
    },
    {
      id: "payment-history",
      label: "Payment History",
      value: "98%",
      change: "Stable",
      trend: "neutral",
      description: "On-time payment rate",
      color: "purple",
    },
    {
      id: "risk-score",
      label: "Risk Score",
      value: "Low",
      change: "-2 pts this quarter",
      trend: "up",
      description: "Compliance & exposure",
      color: "orange",
    },
    {
      id: "vendor-rating",
      label: "Vendor Rating",
      value: "4.2",
      change: "+0.1 this quarter",
      trend: "up",
      description: "Weighted overall score",
      color: "red",
    },
  ],
  trend: [
    { month: "Feb", quality: 84, delivery: 88, response: 72, risk: 38, rating: 3.9 },
    { month: "Mar", quality: 86, delivery: 90, response: 74, risk: 35, rating: 4.0 },
    { month: "Apr", quality: 88, delivery: 87, response: 76, risk: 34, rating: 4.0 },
    { month: "May", quality: 89, delivery: 92, response: 79, risk: 31, rating: 4.1 },
    { month: "Jun", quality: 90, delivery: 91, response: 81, risk: 29, rating: 4.1 },
    { month: "Jul", quality: 91, delivery: 94, response: 84, risk: 27, rating: 4.2 },
  ],
  recentIssues: [
    {
      id: "ISS-412",
      title: "Delayed shipment for PO-23710",
      vendor: "Horizon Logistics",
      priority: "High",
      status: "Open",
      raisedOn: "28 Jul 2026",
    },
    {
      id: "ISS-405",
      title: "Quality deviation on batch #882",
      vendor: "ChemPetro India",
      priority: "High",
      status: "In Review",
      raisedOn: "26 Jul 2026",
    },
    {
      id: "ISS-398",
      title: "Invoice mismatch on INV-8605",
      vendor: "Prime Electronics",
      priority: "Medium",
      status: "In Review",
      raisedOn: "22 Jul 2026",
    },
    {
      id: "ISS-391",
      title: "Missing compliance certificate",
      vendor: "BuildRight Infra",
      priority: "Medium",
      status: "Open",
      raisedOn: "19 Jul 2026",
    },
  ],
};

export const PERFORMANCE_TREND_STYLES = {
  up: "text-emerald-700",
  down: "text-red-700",
  neutral: "text-zinc-500",
};

export const PERFORMANCE_COLOR_STYLES: Record<
  PerformanceColor,
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

export const PRIORITY_STYLES = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-zinc-100 text-zinc-600",
};

export const STATUS_STYLES = {
  Open: "bg-red-50 text-red-700",
  "In Review": "bg-amber-50 text-amber-700",
  Resolved: "bg-emerald-50 text-emerald-700",
};

export const TREND_SERIES_CONFIG: TrendSeriesConfig[] = [
  { dataKey: "quality", label: "Quality", color: "#16a34a" },
  { dataKey: "delivery", label: "Delivery", color: "#2563eb" },
  { dataKey: "response", label: "Response", color: "#4f46e5" },
  { dataKey: "risk", label: "Risk", color: "#ea580c" },
  { dataKey: "rating", label: "Rating", color: "#9333ea" },
];
