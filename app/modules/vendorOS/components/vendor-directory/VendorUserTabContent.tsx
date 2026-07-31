"use client";

import { ReactNode } from "react";
import { Tab, VendorRow } from "../../types/vendorDirectory";
import { formatCurrency } from "../../utils/vendorDirectory";

function DetailSection({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) {
    return (
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
        {children}
      </section>
    );
  }
  
  function MetaGrid({ items }: { items: { label: string; value: string }[] }) {
    return (
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="border-b border-zinc-100 pb-3">
            <dt className="text-xs tracking-wide text-zinc-500 uppercase">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm text-zinc-900">{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  
  function SimpleTable({
    headers,
    rows,
  }: {
    headers: string[];
    rows: string[][];
  }) {
    return (
      <div className="overflow-x-auto border border-zinc-200">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-50">
            <tr className="border-b border-zinc-200">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-3 py-2.5 text-xs font-medium tracking-wide whitespace-nowrap text-zinc-500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row[0]}-${index}`}
                className="border-b border-zinc-100 last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${headers[cellIndex]}-${cell}`}
                    className="px-3 py-2.5 whitespace-nowrap text-zinc-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
const VendorUserTabContent = (tab: Tab, vendor: VendorRow) => {
    switch (tab) {
      case "Overview":
        return (
          <DetailSection title="Vendor summary">
            <MetaGrid
              items={[
                { label: "Vendor Name", value: vendor.name },
                { label: "Code", value: vendor.code },
                { label: "Category", value: vendor.category },
                { label: "City", value: vendor.city },
                { label: "Rating", value: vendor.rating.toFixed(1) },
                { label: "Last Transaction", value: vendor.lastTx },
                { label: "Total Value", value: formatCurrency(vendor.totalValue) },
                { label: "Primary Contact", value: vendor.contact },
              ]}
            />
          </DetailSection>
        );
      case "Contacts":
        return (
          <DetailSection title="Contact directory">
            <SimpleTable
              headers={["Name", "Role", "Email", "Phone"]}
              rows={[
                [
                  vendor.contact,
                  "Primary Contact",
                  `${vendor.contact.toLowerCase().replace(/\s+/g, ".")}@${vendor.name.toLowerCase().replace(/\s+/g, "")}.com`,
                  "+91 98765 43210",
                ],
                [
                  "Accounts Team",
                  "Billing",
                  `accounts@${vendor.name.toLowerCase().replace(/\s+/g, "")}.com`,
                  "+91 22 1234 5678",
                ],
              ]}
            />
          </DetailSection>
        );
      case "Performance":
        return (
          <DetailSection title="Performance snapshot">
            <MetaGrid
              items={[
                { label: "Overall Rating", value: vendor.rating.toFixed(1) },
                { label: "On-time Delivery", value: "94%" },
                { label: "Quality Score", value: "91%" },
                { label: "Response Time", value: "1.8 days" },
                { label: "Compliance", value: "Pass" },
                { label: "Risk Level", value: "Low" },
              ]}
            />
          </DetailSection>
        );
      case "Purchase History":
        return (
          <DetailSection title="Recent purchases">
            <SimpleTable
              headers={["PO Number", "Date", "Amount", "Status"]}
              rows={[
                ["PO-24081", vendor.lastTx, formatCurrency(vendor.totalValue * 0.18), "Completed"],
                ["PO-23944", "12 Jun 2026", formatCurrency(vendor.totalValue * 0.12), "Completed"],
                ["PO-23710", "03 May 2026", formatCurrency(vendor.totalValue * 0.09), "In Progress"],
              ]}
            />
          </DetailSection>
        );
      case "Documents":
        return (
          <DetailSection title="Uploaded documents">
            <SimpleTable
              headers={["Document", "Type", "Uploaded", "Status"]}
              rows={[
                ["PAN Card", "Identity", "10 Jan 2026", "Verified"],
                ["GST Certificate", "Tax", "10 Jan 2026", "Verified"],
                ["Bank Statement", "Finance", "18 Feb 2026", "Pending"],
                ["ISO Certificate", "Compliance", "02 Mar 2026", "Verified"],
              ]}
            />
          </DetailSection>
        );
      case "Payments":
        return (
          <DetailSection title="Payment records">
            <SimpleTable
              headers={["Invoice", "Date", "Amount", "Mode", "Status"]}
              rows={[
                ["INV-8841", vendor.lastTx, formatCurrency(vendor.totalValue * 0.18), "NEFT", "Paid"],
                ["INV-8712", "12 Jun 2026", formatCurrency(vendor.totalValue * 0.12), "RTGS", "Paid"],
                ["INV-8605", "03 May 2026", formatCurrency(vendor.totalValue * 0.09), "Cheque", "Pending"],
              ]}
            />
          </DetailSection>
        );
      case "Projects Associated":
        return (
          <DetailSection title="Linked projects">
            <SimpleTable
              headers={["Project", "Role", "Start", "Status"]}
              rows={[
                ["Plant Expansion Phase 2", "Primary Supplier", "Jan 2026", "Active"],
                ["Warehouse Digitization", "IT Partner", "Mar 2026", "Active"],
                ["Q1 Maintenance Cycle", "Service Vendor", "Apr 2026", "Completed"],
              ]}
            />
          </DetailSection>
        );
      case "Issues Raised":
        return (
          <DetailSection title="Open and closed issues">
            <SimpleTable
              headers={["Issue ID", "Title", "Priority", "Status"]}
              rows={[
                ["ISS-312", "Delayed shipment for PO-23710", "High", "Open"],
                ["ISS-298", "Invoice mismatch on INV-8605", "Medium", "In Review"],
                ["ISS-271", "Missing compliance document", "Low", "Resolved"],
              ]}
            />
          </DetailSection>
        );
      case "Audit Timeline":
        return (
          <DetailSection title="Audit trail">
            <ol className="relative space-y-4 border-l border-zinc-200 pl-5">
              {[
                { when: vendor.lastTx, event: "Purchase order completed", by: "System" },
                { when: "18 Jul 2026", event: "Compliance documents reviewed", by: "Ananya Iyer" },
                { when: "02 Jul 2026", event: "Vendor status marked Active", by: "Rajesh Kumar" },
                { when: "15 Jun 2026", event: "Vendor profile created", by: "System" },
              ].map((item) => (
                <li key={`${item.when}-${item.event}`} className="relative">
                  <span className="absolute top-1.5 -left-[1.4rem] size-2.5 rounded-full border border-zinc-300 bg-white" />
                  <p className="text-sm font-medium text-zinc-900">{item.event}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">
                    {item.when} · {item.by}
                  </p>
                </li>
              ))}
            </ol>
          </DetailSection>
        );
    }
  }

export default VendorUserTabContent;