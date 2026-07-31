"use client";

import { useEffect, useMemo, useState } from "react";
import { APPROVAL_STATUSES } from "../../defaultValues/vendorApproval";
import {
  ApprovalAction,
  ApprovalItem,
  ApprovalStatus,
} from "../../types/vendorApproval";
import {
  formatNow,
  loadApprovals,
} from "../../utils/vendorApproval";
import ApprovalCard from "./ApprovalCard";
import Tag from "./Tag";
import Header from "@/app/Components/Header/Header";

const CURRENT_USER = "You";

const VendorApproval = () => {
  const [items, setItems] = useState<ApprovalItem[]>([]);
  const [statusFilter, setStatusFilter] = useState<ApprovalStatus | "All">("All");

  useEffect(() => {
    const fetchItems = async () => {
      const items = await loadApprovals();
      setItems((prev) => [...prev, ...items]);
    };
    fetchItems();
  }, []);

  const counts = useMemo(() => {
    return APPROVAL_STATUSES.reduce(
      (acc, status) => {
        if (status === "All") {
          acc[status] = items.length;
        } else {
          acc[status] = items.filter((item) => item.status === status).length;
        }
        return acc;
      },
      {} as Record<ApprovalStatus, number>,
    );
  }, [items]);

  const filteredItems = useMemo(() => {
    if (statusFilter === "All") return items;
    return items.filter((item) => item.status === statusFilter);
  }, [items, statusFilter]);

  const handleStatusChange = (
    id: string,
    status: ApprovalStatus,
    action: ApprovalAction,
  ) => {
    const at = formatNow();
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          status,
          timeline: [
            ...item.timeline,
            {
              id: `tl-${id}-${Date.now()}`,
              action:
                action === "Approve"
                  ? "Approved"
                  : action === "Reject"
                    ? "Rejected"
                    : "Changes requested",
              by: CURRENT_USER,
              at,
              note:
                action === "Request Changes"
                  ? "Additional information requested from vendor"
                  : undefined,
            },
          ],
        };
      }),
    );
  };

  const handleAddComment = (id: string, text: string) => {
    const at = formatNow();
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          comments: [
            ...item.comments,
            {
              id: `cm-${id}-${Date.now()}`,
              author: CURRENT_USER,
              text,
              at,
            },
          ],
          timeline: [
            ...item.timeline,
            {
              id: `tl-${id}-comment-${Date.now()}`,
              action: "Comment added",
              by: CURRENT_USER,
              at,
              note: text,
            },
          ],
        };
      }),
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <Header title="Vendor Approval" description="Review and approve vendor applications." />  
      <div className="border-b border-zinc-200">
        <div className="flex gap-1" role="tablist" aria-label="Notification filters">
          {APPROVAL_STATUSES.map((status) => {
            const isActive = statusFilter === status;
            return (
              <button
                key={status}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() =>  setStatusFilter((prev) => (prev === status ? "All" : status))}
                className={`border-b-2 px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "border-zinc-900 font-medium text-zinc-900"
                    : "border-transparent text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {status} ({counts[status] ?? 0})
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-zinc-600">
          Showing{" "}
          <span className="font-medium text-zinc-900">{filteredItems.length}</span>{" "}
          {statusFilter === "All" ? "approvals" : statusFilter.toLowerCase()}
        </p>
        {statusFilter !== "All" && (
          <button
            type="button"
            onClick={() => setStatusFilter("All")}
            className="text-sm text-zinc-600 underline-offset-2 hover:text-zinc-900 hover:underline"
          >
            Clear filter
          </button>
        )}
      </div>

      <section className="grid gap-4 xl:grid-cols-2">
        {filteredItems.length === 0 ? (
          <p className="text-sm text-zinc-500">No approvals in this status.</p>
        ) : (
          filteredItems.map((item) => (
            <ApprovalCard
              key={item.id}
              item={item}
              onStatusChange={handleStatusChange}
              onAddComment={handleAddComment}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default VendorApproval;
