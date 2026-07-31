import { ApprovalItem, ApprovalStatus } from "../types/vendorApproval";

export const APPROVAL_STORAGE_KEY = "vendoros-approvals";

export const APPROVAL_STATUSES: ApprovalStatus[] = [
  "All",
  "Pending",
  "Approved",
  "Rejected",
  "On Hold",
];

export const STATUS_TAG_STYLES: Record<ApprovalStatus, string> = {
  All: "bg-zinc-100 text-zinc-800 border-zinc-200",
  Pending: "bg-amber-100 text-amber-800 border-amber-200",
  Approved: "bg-green-100 text-green-800 border-green-200",
  Rejected: "bg-red-100 text-red-800 border-red-200",
  "On Hold": "bg-purple-100 text-purple-800 border-purple-200",
};

export const initialApprovals: ApprovalItem[] = [
  {
    id: "apr-001",
    vendorName: "Apex Supplies",
    vendorCode: "VND-1000",
    category: "Raw Materials",
    submittedBy: "Rajesh Kumar",
    submittedOn: "28 Jul 2026",
    status: "Pending",
    timeline: [
      {
        id: "tl-001-1",
        action: "Submitted for approval",
        by: "Rajesh Kumar",
        at: "28 Jul 2026, 10:20 AM",
        note: "New vendor onboarding request",
      },
      {
        id: "tl-001-2",
        action: "Documents verified",
        by: "Ananya Iyer",
        at: "29 Jul 2026, 02:15 PM",
      },
    ],
    comments: [
      {
        id: "cm-001-1",
        author: "Ananya Iyer",
        text: "GST certificate looks valid. Waiting on bank proof.",
        at: "29 Jul 2026, 02:18 PM",
      },
    ],
  },
  {
    id: "apr-002",
    vendorName: "NovaTech Solutions",
    vendorCode: "VND-1001",
    category: "IT Services",
    submittedBy: "Priya Sharma",
    submittedOn: "25 Jul 2026",
    status: "On Hold",
    timeline: [
      {
        id: "tl-002-1",
        action: "Submitted for approval",
        by: "Priya Sharma",
        at: "25 Jul 2026, 11:05 AM",
      },
      {
        id: "tl-002-2",
        action: "Changes requested",
        by: "Vikram Singh",
        at: "26 Jul 2026, 04:40 PM",
        note: "Need updated MSME certificate",
      },
    ],
    comments: [
      {
        id: "cm-002-1",
        author: "Vikram Singh",
        text: "Please re-upload MSME registration with clear stamp.",
        at: "26 Jul 2026, 04:42 PM",
      },
    ],
  },
  {
    id: "apr-003",
    vendorName: "Horizon Logistics",
    vendorCode: "VND-1002",
    category: "Logistics",
    submittedBy: "Amit Patel",
    submittedOn: "20 Jul 2026",
    status: "Approved",
    timeline: [
      {
        id: "tl-003-1",
        action: "Submitted for approval",
        by: "Amit Patel",
        at: "20 Jul 2026, 09:30 AM",
      },
      {
        id: "tl-003-2",
        action: "Approved",
        by: "Meera Nair",
        at: "22 Jul 2026, 01:10 PM",
        note: "All checks passed",
      },
    ],
    comments: [
      {
        id: "cm-003-1",
        author: "Meera Nair",
        text: "Approved for national logistics contracts.",
        at: "22 Jul 2026, 01:12 PM",
      },
    ],
  },
  {
    id: "apr-004",
    vendorName: "ChemPetro India",
    vendorCode: "VND-1008",
    category: "Chemical & Petrochem",
    submittedBy: "Sneha Reddy",
    submittedOn: "18 Jul 2026",
    status: "Rejected",
    timeline: [
      {
        id: "tl-004-1",
        action: "Submitted for approval",
        by: "Sneha Reddy",
        at: "18 Jul 2026, 03:20 PM",
      },
      {
        id: "tl-004-2",
        action: "Rejected",
        by: "Karan Joshi",
        at: "21 Jul 2026, 11:45 AM",
        note: "Incomplete compliance documents",
      },
    ],
    comments: [
      {
        id: "cm-004-1",
        author: "Karan Joshi",
        text: "ISO certificate expired. Rejecting until renewal is provided.",
        at: "21 Jul 2026, 11:47 AM",
      },
    ],
  },
  {
    id: "apr-005",
    vendorName: "Prime Electronics",
    vendorCode: "VND-1003",
    category: "Electronics",
    submittedBy: "Rohan Mehta",
    submittedOn: "30 Jul 2026",
    status: "Pending",
    timeline: [
      {
        id: "tl-005-1",
        action: "Submitted for approval",
        by: "Rohan Mehta",
        at: "30 Jul 2026, 08:50 AM",
      },
    ],
    comments: [],
  },
];

export const actionToStatus: Record<"Approve" | "Reject" | "Request Changes", ApprovalStatus> = {
  Approve: "Approved",
  Reject: "Rejected",
  "Request Changes": "On Hold",
};