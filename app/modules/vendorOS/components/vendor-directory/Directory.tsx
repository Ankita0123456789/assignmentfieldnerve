"use client";

import { useMemo, useState } from "react";
import Filters from "./Filters";
import { mockVendors } from "../../utils/vendorDirectory";
import Table from "./Table";
import {
  DirectoryFiltersState,
  VendorColumnKey,
  VENDOR_COLUMNS,
} from "../../types/vendorDirectory";
import Header from "@/app/Components/Header/Header";

const defaultColumnVisibility = VENDOR_COLUMNS.reduce(
  (acc, column) => {
    if (column.key) {
      acc[column.key] = true;
    }
    return acc;
  },
  {} as Record<VendorColumnKey, boolean>,
);

const Directory = () => {
  const [filters, setFilters] = useState<DirectoryFiltersState>({
    search: "",
    status: "all",
    category: "all",
  });
  const [columnVisibility, setColumnVisibility] = useState(
    defaultColumnVisibility,
  );

  const filteredData = useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return mockVendors.filter((vendor) => {
      const matchesSearch =
        query.length === 0 ||
        vendor.name.toLowerCase().includes(query) ||
        vendor.code.toLowerCase().includes(query);

      const matchesStatus =
        filters.status === "all" || vendor.status === filters.status;

      const matchesCategory =
        filters.category === "all" || vendor.category === filters.category;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [filters]);

  return (
    <div className="flex flex-col gap-5">
      <Header title="Vendor Directory" description="Browse, filter, and export vendors across categories and statuses." />

      <Filters
        filters={filters}
        onFiltersChange={setFilters}
        columnVisibility={columnVisibility}
        onColumnVisibilityChange={setColumnVisibility}
        data={filteredData}
      />

      <Table data={filteredData} columnVisibility={columnVisibility} />
    </div>
  );
};

export default Directory;
