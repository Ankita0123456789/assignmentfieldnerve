"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { STATUS_STYLES, TABS } from "../../defaultValues/vendorDirectory";
import { Tab, VendorDetailProps } from "../../types/vendorDirectory";
import { mockVendors } from "../../utils/vendorDirectory";
import VendorUserTabContent from "./VendorUserTabContent";

const VendorDetail = ({ vendorId }: VendorDetailProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  const vendor = useMemo(
    () => mockVendors.find((item) => item.id === vendorId),
    [vendorId],
  );

  if (!vendor) {
    return (
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => router.push("/src/vendor-directory")}
          className="inline-flex w-fit items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to directory
        </button>
        <p className="text-sm text-zinc-600">Vendor not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => router.push("/src/vendor-directory")}
          className="inline-flex w-fit items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to directory
        </button>

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-zinc-500 uppercase">
              Vendor detail
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
              {vendor.name}
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              {vendor.code} · {vendor.category} · {vendor.city}
            </p>
          </div>
          <span
            className={`inline-flex rounded px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[vendor.status]}`}
          >
            {vendor.status}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto border-b border-zinc-200">
        <div className="flex min-w-max gap-1" role="tablist" aria-label="Vendor sections">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 px-3 py-2.5 text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-zinc-900 font-medium text-zinc-900"
                    : "border-transparent text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel">{VendorUserTabContent(activeTab, vendor)}</div>
    </div>
  );
};

export default VendorDetail;
