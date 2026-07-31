"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navItems } from "./constants";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-zinc-200 bg-zinc-50">
      <div className="border-b border-zinc-200 px-5 py-5">
        <Link href="/" className="block">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
            VendorOS
          </p>
          <h1 className="mt-1 text-lg font-semibold tracking-tight text-zinc-900">
            Control Center
          </h1>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3" aria-label="Main">
        {navItems.map(({ href, label, description, icon: Icon }) => {
          const isActive =
            pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors",
                isActive
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-700 hover:bg-zinc-200/70",
              )}
            >
              <Icon
                className={clsx(
                  "mt-0.5 size-4 shrink-0",
                  isActive
                    ? "text-white"
                    : "text-zinc-500 group-hover:text-zinc-700",
                )}
                aria-hidden
              />
              <span className="min-w-0">
                <span className="block text-sm font-medium leading-5">
                  {label}
                </span>
                <span
                  className={clsx(
                    "mt-0.5 block text-xs leading-4",
                    isActive ? "text-zinc-300" : "text-zinc-500",
                  )}
                >
                  {description}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
