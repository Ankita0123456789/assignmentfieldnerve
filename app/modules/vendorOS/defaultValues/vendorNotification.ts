import {
  NotificationItem,
  NotificationType,
} from "../types/vendorNotification";

export const NOTIFICATION_STORAGE_KEY = "vendoros-notifications";

export const NOTIFICATION_TYPES: NotificationType[] = [
  "Approval Pending",
  "Document Expiring",
  "Low Vendor Rating",
  "Delayed Delivery",
  "Payment Due",
];

export const NOTIFICATION_TYPE_STYLES: Record<NotificationType, string> = {
  "Approval Pending": "bg-amber-100 text-amber-800 border-amber-200",
  "Document Expiring": "bg-orange-100 text-orange-800 border-orange-200",
  "Low Vendor Rating": "bg-red-100 text-red-800 border-red-200",
  "Delayed Delivery": "bg-purple-100 text-purple-800 border-purple-200",
  "Payment Due": "bg-blue-100 text-blue-800 border-blue-200",
};

export const initialNotifications: NotificationItem[] = [
  {
    id: "ntf-001",
    type: "Approval Pending",
    title: "Vendor approval awaiting review",
    message: "Apex Supplies (VND-1000) is pending approval for onboarding.",
    vendorName: "Apex Supplies",
    createdAt: "31 Jul 2026, 09:15 AM",
    read: false,
  },
  {
    id: "ntf-002",
    type: "Document Expiring",
    title: "GST certificate expiring soon",
    message: "ChemPetro India GST certificate expires in 7 days.",
    vendorName: "ChemPetro India",
    createdAt: "30 Jul 2026, 04:40 PM",
    read: false,
  },
  {
    id: "ntf-003",
    type: "Low Vendor Rating",
    title: "Vendor rating dropped below threshold",
    message: "Horizon Logistics rating fell to 2.8 after recent quality issues.",
    vendorName: "Horizon Logistics",
    createdAt: "30 Jul 2026, 11:20 AM",
    read: false,
  },
  {
    id: "ntf-004",
    type: "Delayed Delivery",
    title: "Shipment delayed beyond SLA",
    message: "PO-23710 from FleetLine Movers is 4 days past the promised date.",
    vendorName: "FleetLine Movers",
    createdAt: "29 Jul 2026, 06:05 PM",
    read: true,
  },
  {
    id: "ntf-005",
    type: "Payment Due",
    title: "Payment due reminder",
    message: "INV-8605 for Prime Electronics is due in 2 days (₹4,80,000).",
    vendorName: "Prime Electronics",
    createdAt: "29 Jul 2026, 10:00 AM",
    read: false,
  },
  {
    id: "ntf-006",
    type: "Approval Pending",
    title: "New vendor submitted for approval",
    message: "NovaTech Solutions is waiting for compliance review.",
    vendorName: "NovaTech Solutions",
    createdAt: "28 Jul 2026, 02:30 PM",
    read: true,
  },
  {
    id: "ntf-007",
    type: "Document Expiring",
    title: "ISO certificate renewal needed",
    message: "BuildRight Infra ISO 9001 certificate expires in 12 days.",
    vendorName: "BuildRight Infra",
    createdAt: "27 Jul 2026, 01:15 PM",
    read: true,
  },
  {
    id: "ntf-008",
    type: "Delayed Delivery",
    title: "Partial delivery still pending",
    message: "Apex Supplies has an open shortfall on PO-23944.",
    vendorName: "Apex Supplies",
    createdAt: "26 Jul 2026, 05:45 PM",
    read: false,
  },
  {
    id: "ntf-009",
    type: "Payment Due",
    title: "Overdue payment alert",
    message: "INV-8712 for MediCare Pharma is overdue by 3 days.",
    vendorName: "MediCare Pharma",
    createdAt: "25 Jul 2026, 09:50 AM",
    read: true,
  },
  {
    id: "ntf-010",
    type: "Low Vendor Rating",
    title: "Performance review recommended",
    message: "Urban Furniture has scored below 3.0 for two consecutive months.",
    vendorName: "Urban Furniture",
    createdAt: "24 Jul 2026, 03:10 PM",
    read: false,
  },
];
