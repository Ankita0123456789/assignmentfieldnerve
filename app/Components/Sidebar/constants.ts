import {
  Bell,
  Building2,
  CheckCircle2,
  LayoutDashboard,
  LineChart,
  UserPlus,
  } from "lucide-react";
import { NavItem } from "./interface";

export const navItems: NavItem[] = [
  {
    href: "/src/vendor-dashboard",
    label: "Dashboard",
    description: "Vendor overview and status",
    icon: LayoutDashboard,
  },
  {
    href: "/src/vendor-directory",
    label: "Directory",
    description: "Browse all vendors",
    icon: Building2,
  },
  {
    href: "/src/create-vendor",
    label: "Create Vendor",
    description: "Add a new vendor",
    icon: UserPlus,
  },
  {
    href: "/src/performance",
    label: "Performance",
    description: "Scores and trends",
    icon: LineChart,
  },
  {
    href: "/src/approvals",
    label: "Approvals",
    description: "Pending review queue",
    icon: CheckCircle2,
  },
  {
    href: "/src/notifications",
    label: "Notifications",
    description: "Alerts and updates",
    icon: Bell,
  },
];
