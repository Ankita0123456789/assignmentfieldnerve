import { VendorRow } from "../types/vendorDirectory";

export const NAMES = [
    "Apex Supplies",
    "NovaTech Solutions",
    "Horizon Logistics",
    "Prime Electronics",
    "MediCare Pharma",
    "Green Energy Co",
    "BuildRight Infra",
    "Urban Furniture",
    "ChemPetro India",
    "Swift Cargo",
    "Pixel Softwares",
    "SteelForge Ltd",
    "Ocean Freight",
    "Circuit Hub",
    "BioLife Labs",
    "SolarPeak Power",
    "Concrete Works",
    "HomeStyle Décor",
    "PetroChem Plus",
    "DataNest IT",
    "RawEdge Materials",
    "FleetLine Movers",
    "ChipWorks",
    "PharmaNest",
    "WattGrid Energy",
    "SkyRise Builders",
    "Oak & Pine",
    "Alkali Chem",
    "CloudBridge",
    "MetalMart",
    "TrailBlaze Logistics",
    "ElectroMart",
    "HealWell Drugs",
    "Ignite Fuels",
    "Brick & Beam",
    "Lumen Interiors",
    "Nexus Petro",
    "CodeCraft Labs",
    "OreVault",
    "RapidHaul",
];

export const CONTACTS = [
    "Rajesh Kumar",
    "Priya Sharma",
    "Amit Patel",
    "Sneha Reddy",
    "Vikram Singh",
    "Ananya Iyer",
    "Rohan Mehta",
    "Neha Gupta",
    "Karan Joshi",
    "Meera Nair",
];

export const CITIES = [
    "Mumbai",
    "Bengaluru",
    "Delhi",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Ahmedabad",
    "Kolkata",
    "Jaipur",
    "Surat",
];

export const SELECT_CLASSNAME =
    "rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-500";

export const PAGE_SIZE = 10;

export const STATUS_STYLES: Record<VendorRow["status"], string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Inactive: "bg-zinc-100 text-zinc-600",
  Pending: "bg-amber-50 text-amber-700",
  Suspended: "bg-red-50 text-red-700",
};

export const TABS = [
    "Overview",
    "Contacts",
    "Performance",
    "Purchase History",
    "Documents",
    "Payments",
    "Projects Associated",
    "Issues Raised",
    "Audit Timeline",
  ] as const;