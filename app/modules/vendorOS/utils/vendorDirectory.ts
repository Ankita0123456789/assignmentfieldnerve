import { VendorCategory, VendorRow, VendorStatus, VENDOR_CATEGORIES, VENDOR_STATUSES, VendorColumnKey, VENDOR_COLUMNS } from "../types/vendorDirectory";
import { NAMES, CONTACTS, CITIES } from "../defaultValues/vendorDirectory";


function seededRandom(seed: number) {
    let value = seed;
    return () => {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
}

const random = seededRandom(42);

function pick<T>(items: T[]): T {
    return items[Math.floor(random() * items.length)];
}

function formatDate(offsetDays: number) {
    const date = new Date(2026, 6, 31);
    date.setDate(date.getDate() - offsetDays);
    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export const mockVendors: VendorRow[] = NAMES.map((name, index) => {
    const category = pick(VENDOR_CATEGORIES) as VendorCategory;
    const status = pick(VENDOR_STATUSES) as VendorStatus;
    const rating = Math.round((3 + random() * 2) * 10) / 10;
    const totalValue = Math.round((random() * 90 + 5) * 100000);

    return {
        id: `vnd-${String(index + 1).padStart(3, "0")}`,
        name,
        code: `VND-${String(1000 + index)}`,
        category,
        contact: pick(CONTACTS),
        city: pick(CITIES),
        rating,
        status,
        lastTx: formatDate(Math.floor(random() * 120)),
        totalValue,
    };
});



export function exportCsv(rows: VendorRow[], visibility: Record<VendorColumnKey, boolean>) {
    const visibleColumns = VENDOR_COLUMNS.filter(
        (column): column is { key: VendorColumnKey; label: string } =>
            column.key !== null && visibility[column.key],
    );

    const header = visibleColumns.map((column) => column.label).join(",");
    const body = rows
        .map((row) =>
            visibleColumns
                .map((column) => {
                    const value = row[column.key];
                    const cell = typeof value === "number" ? String(value) : value;
                    return `"${cell.replace(/"/g, '""')}"`;
                })
                .join(","),
        )
        .join("\n");

    const blob = new Blob([[header, body].join("\n")], {
        type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "vendor-directory.csv";
    link.click();
    URL.revokeObjectURL(url);
}

export function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  }