export type PerformanceColor =
  | "blue"
  | "green"
  | "red"
  | "purple"
  | "orange"
  | "indigo";

export type IssuePriority = "High" | "Medium" | "Low";
export type IssueStatus = "Open" | "In Review" | "Resolved";

export interface PerformanceMetricCard {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
  color: PerformanceColor;
}

export interface PerformanceTrendPoint {
  month: string;
  quality: number;
  delivery: number;
  response: number;
  risk: number;
  rating: number;
}

export interface RecentIssue {
  id: string;
  title: string;
  vendor: string;
  priority: IssuePriority;
  status: IssueStatus;
  raisedOn: string;
}

export interface PerformanceData {
  metrics: PerformanceMetricCard[];
  trend: PerformanceTrendPoint[];
  recentIssues: RecentIssue[];
}

export interface PerformanceCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
  color: PerformanceColor;
}

export type TrendSeriesKey = Exclude<keyof PerformanceTrendPoint, "month">;

export interface TrendSeriesConfig {
  dataKey: TrendSeriesKey;
  label: string;
  color: string;
}

export interface TrendChartProps {
  data: PerformanceTrendPoint[];
}

export interface RecentIssuesProps {
  issues: RecentIssue[];
}
