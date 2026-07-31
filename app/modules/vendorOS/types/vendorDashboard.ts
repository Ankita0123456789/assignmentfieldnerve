export type KpiColor =
  | "blue"
  | "green"
  | "red"
  | "purple"
  | "orange"
  | "indigo";

export interface KpiCard {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
  color: KpiColor;
}

export interface PerformanceTrendPoint {
  month: string;
  onTime: number;
  quality: number;
  rating: number;
}

export interface CategoryDistributionPoint {
  category: string;
  count: number;
}

export interface MonthlyPurchasePoint {
  month: string;
  value: number;
}

export interface RatingDistributionPoint {
  rating: string;
  count: number;
}

export interface DashboardData {
  kpis: KpiCard[];
  performanceTrend: PerformanceTrendPoint[];
  categoryDistribution: CategoryDistributionPoint[];
}

export interface CardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
  color: KpiColor;
}

export interface ChartsProps {
  performanceTrend: PerformanceTrendPoint[];
  categoryDistribution: CategoryDistributionPoint[];
}