"use client";

import { Columns3, Download, Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  DirectoryFiltersState,
  VendorColumnKey,
  VENDOR_CATEGORIES,
  VENDOR_COLUMNS,
  VENDOR_STATUSES,
  FiltersProps
} from "../../types/vendorDirectory";
import { exportCsv } from "../../utils/vendorDirectory";
import { SELECT_CLASSNAME } from "../../defaultValues/vendorDirectory";

const Filters = ({
  filters,
  onFiltersChange,
  columnVisibility,
  onColumnVisibilityChange,
  data,
}: FiltersProps) => {
  const [columnsOpen, setColumnsOpen] = useState(false);

  const toggleableColumns = useMemo(
    () =>
      VENDOR_COLUMNS.filter(
        (column): column is { key: VendorColumnKey; label: string } =>
          column.key !== null,
      ),
    [],
  );

  return (
    <div className="flex flex-col gap-3 border-b border-zinc-200 pb-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-[220px] flex-1">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-400"
            aria-hidden
          />
          <input
            type="search"
            value={filters.search}
            onChange={(event) =>
              onFiltersChange({ ...filters, search: event.target.value })
            }
            placeholder="Search by name or code"
            className="w-full rounded border border-zinc-300 bg-white py-2 pr-3 pl-9 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-500"
          />
        </div>

        <select
          value={filters.status}
          onChange={(event) =>
            onFiltersChange({
              ...filters,
              status: event.target.value as DirectoryFiltersState["status"],
            })
          }
          className={SELECT_CLASSNAME}
          aria-label="Filter by status"
        >
          <option value="all">All Statuses</option>
          {VENDOR_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          value={filters.category}
          onChange={(event) =>
            onFiltersChange({
              ...filters,
              category: event.target.value as DirectoryFiltersState["category"],
            })
          }
          className={SELECT_CLASSNAME}
          aria-label="Filter by category"
        >
          <option value="all">All Categories</option>
          {VENDOR_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="relative">
          <button
            type="button"
            onClick={() => setColumnsOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            <Columns3 className="size-4" aria-hidden />
            Columns
          </button>
          {columnsOpen && (
            <div className="absolute right-0 z-10 mt-2 w-52 rounded border border-zinc-200 bg-white p-3 shadow-sm">
              <p className="mb-2 text-xs font-medium tracking-wide text-zinc-500 uppercase">
                Visible columns
              </p>
              <ul className="flex flex-col gap-2">
                {toggleableColumns.map((column) => (
                  <li key={column.key}>
                    <label className="flex items-center gap-2 text-sm text-zinc-800">
                      <input
                        type="checkbox"
                        checked={columnVisibility[column.key]}
                        onChange={(event) =>
                          onColumnVisibilityChange({
                            ...columnVisibility,
                            [column.key]: event.target.checked,
                          })
                        }
                        className="h-4 w-4 accent-zinc-900"
                      />
                      {column.label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => exportCsv(data, columnVisibility)}
          className="inline-flex items-center gap-2 rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
        >
          <Download className="size-4" aria-hidden />
          Export
        </button>
      </div>
    </div>
  );
};

export default Filters;
