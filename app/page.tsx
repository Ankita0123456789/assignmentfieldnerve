import Link from "next/link";
import { navItems } from "@/app/Components/Sidebar";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-4">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
        Overview
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
        Welcome to VendorOS
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
        Use the sidebar to open any module. Each route under{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-800">
          /src
        </code>{" "}
        is listed below.
      </p>

      <ul className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
        {navItems.map(({ href, label, description }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-zinc-900"
            >
              <span>
                <span className="block text-sm font-medium text-zinc-900">
                  {label}
                </span>
                <span className="mt-0.5 block text-sm text-zinc-500">
                  {description}
                </span>
              </span>
              <span className="shrink-0 font-mono text-xs text-zinc-400">
                {href}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
