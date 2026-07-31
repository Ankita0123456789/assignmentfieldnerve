import { TABS } from "../defaultValues/vendorDirectory";

export type VendorStatus = "Active" | "Inactive" | "Pending" | "Suspended";

export type VendorCategory =
  | "Raw Materials"
  | "IT Services"
  | "Logistics"
  | "Electronics"
  | "Pharmaceuticals"
  | "Energy"
  | "Construction"
  | "Furniture"
  | "Chemical & Petrochem";

export interface VendorRow {
  id: string;
  name: string;
  code: string;
  category: VendorCategory;
  contact: string;
  city: string;
  rating: number;
  status: VendorStatus;
  lastTx: string;
  totalValue: number;
}

export type VendorColumnKey =
  | "name"
  | "code"
  | "category"
  | "contact"
  | "city"
  | "rating"
  | "status"
  | "lastTx"
  | "totalValue";

export interface VendorColumnDef {
  key: VendorColumnKey | null;
  label: string;
}

export interface DirectoryFiltersState {
  search: string;
  status: VendorStatus | "all";
  category: VendorCategory | "all";
}

export const VENDOR_COLUMNS: VendorColumnDef[] = [
  { key: "name", label: "Vendor Name" },
  { key: "code", label: "Code" },
  { key: "category", label: "Category" },
  { key: "contact", label: "Contact" },
  { key: "city", label: "City" },
  { key: "rating", label: "Rating" },
  { key: "status", label: "Status" },
  { key: "lastTx", label: "Last Txn" },
  { key: "totalValue", label: "Total Value" },
  { key: null, label: "" },
];

export const VENDOR_CATEGORIES: VendorCategory[] = [
  "Raw Materials",
  "IT Services",
  "Logistics",
  "Electronics",
  "Pharmaceuticals",
  "Energy",
  "Construction",
  "Furniture",
  "Chemical & Petrochem",
];

export const VENDOR_STATUSES: VendorStatus[] = [
  "Active",
  "Inactive",
  "Pending",
  "Suspended",
];

export interface FiltersProps {
    filters: DirectoryFiltersState;
    onFiltersChange: (next: DirectoryFiltersState) => void;
    columnVisibility: Record<VendorColumnKey, boolean>;
    onColumnVisibilityChange: (next: Record<VendorColumnKey, boolean>) => void;
    data: VendorRow[];
  }

  export interface TableProps {
    data: VendorRow[];
    columnVisibility: Record<VendorColumnKey, boolean>;
  }

  export type Tab = (typeof TABS)[number];

  export interface VendorDetailProps {
  vendorId: string;
}