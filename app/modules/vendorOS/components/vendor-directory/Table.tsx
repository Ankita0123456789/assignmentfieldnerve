"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  VendorColumnKey,
  VendorRow,
  VENDOR_COLUMNS,
} from "../../types/vendorDirectory";
import { TableProps } from "../../types/vendorDirectory";
import { PAGE_SIZE, STATUS_STYLES } from "../../defaultValues/vendorDirectory";
import { formatCurrency } from "../../utils/vendorDirectory";

const Table = ({ data, columnVisibility }: TableProps) => {
  const router = useRouter();
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: PAGE_SIZE,
  });

  useEffect(() => {
    setPagination((prev) => ({ ...prev, pageIndex: 0 }));
  }, [data]);

  const columns = useMemo<ColumnDef<VendorRow>[]>(
    () =>
      VENDOR_COLUMNS.map((column) => {
        if (column.key === null) {
          return {
            id: "actions",
            header: "",
            enableSorting: false,
            cell: ({ row }) => (
              <button
                type="button"
                className="rounded p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
                aria-label={`View ${row.original.name}`}
                onClick={() => {
                  router.push(`/src/vendor-directory/${row.original.id}`);
                }}
              >
                <Eye className="size-4" />
              </button>
            ),
          };
        }

        const key = column.key;

        return {
          id: key,
          accessorKey: key,
          header: column.label,
          enableSorting: key === "name",
          cell: ({ row }) => {
            const value = row.original[key];

            if (key === "status") {
              return (
                <span
                  className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[row.original.status]}`}
                >
                  {row.original.status}
                </span>
              );
            }

            if (key === "rating") {
              return (
                <span className="tabular-nums text-zinc-800">
                  {row.original.rating.toFixed(1)}
                </span>
              );
            }

            if (key === "totalValue") {
              return (
                <span className="tabular-nums text-zinc-800">
                  {formatCurrency(row.original.totalValue)}
                </span>
              );
            }

            return <span className="text-zinc-800">{String(value)}</span>;
          },
        };
      }),
    [router],
  );

  const visibilityState = useMemo(() => {
    const state: Record<string, boolean> = { actions: true };
    (Object.keys(columnVisibility) as VendorColumnKey[]).forEach((key) => {
      state[key] = columnVisibility[key];
    });
    return state;
  }, [columnVisibility]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility: visibilityState,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const totalRows = data.length;
  const from = totalRows === 0 ? 0 : pageIndex * PAGE_SIZE + 1;
  const to = Math.min((pageIndex + 1) * PAGE_SIZE, totalRows);

  return (
    <div className="flex flex-col gap-3 min-h-full">
      <div className="overflow-x-auto border border-zinc-200 h-full overflow-y-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-zinc-200">
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort();
                  const sorted = header.column.getIsSorted();

                  return (
                    <th
                      key={header.id}
                      className="px-3 py-2.5 text-xs font-medium tracking-wide whitespace-nowrap text-zinc-500 uppercase"
                    >
                      {header.isPlaceholder ? null : canSort ? (
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900"
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          <span className="text-[10px] text-zinc-400">
                            {sorted === "asc"
                              ? "▲"
                              : sorted === "desc"
                                ? "▼"
                                : "↕"}
                          </span>
                        </button>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-3 py-10 text-center text-sm text-zinc-500"
                >
                  No vendors match the current filters.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/80"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-3 py-2.5 whitespace-nowrap text-zinc-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-600">
        <p>
          Showing{" "}
          <span className="font-medium text-zinc-900">
            {from}-{to}
          </span>{" "}
          of <span className="font-medium text-zinc-900">{totalRows}</span>{" "}
          vendors
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="inline-flex items-center gap-1 rounded border border-zinc-300 bg-white px-2.5 py-1.5 text-sm text-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden />
            Prev
          </button>
          <span className="min-w-20 text-center tabular-nums">
            Page {pageCount === 0 ? 0 : pageIndex + 1} of {pageCount}
          </span>
          <button
            type="button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="inline-flex items-center gap-1 rounded border border-zinc-300 bg-white px-2.5 py-1.5 text-sm text-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
