import { APPROVAL_STORAGE_KEY, initialApprovals } from "../defaultValues/vendorApproval";
import { ApprovalItem } from "../types/vendorApproval";

export function loadApprovals(): ApprovalItem[] {
  if (typeof window === "undefined") {
    return initialApprovals;
  }

  try {
    const stored = window.localStorage.getItem(APPROVAL_STORAGE_KEY);
    if (!stored) {
      return initialApprovals;
    }
    return JSON.parse(stored) as ApprovalItem[];
  } catch {
    return initialApprovals;
  }
}

export function saveApprovals(items: ApprovalItem[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(APPROVAL_STORAGE_KEY, JSON.stringify(items));
}

export function formatNow() {
  return new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
