export type ApprovalStatus = "All" | "Pending" | "Approved" | "Rejected" | "On Hold";

export type ApprovalAction = "Approve" | "Reject" | "Request Changes" | "Comment";

export interface TimelineEntry {
  id: string;
  action: string;
  by: string;
  at: string;
  note?: string;
}

export interface ApprovalComment {
  id: string;
  author: string;
  text: string;
  at: string;
}

export interface ApprovalItem {
  id: string;
  vendorName: string;
  vendorCode: string;
  category: string;
  submittedBy: string;
  submittedOn: string;
  status: ApprovalStatus;
  timeline: TimelineEntry[];
  comments: ApprovalComment[];
}

export interface TagProps {
  status: ApprovalStatus;
}

export interface ApprovalCardProps {
  item: ApprovalItem;
  onStatusChange: (id: string, status: ApprovalStatus, action: ApprovalAction) => void;
  onAddComment: (id: string, text: string) => void;
}
