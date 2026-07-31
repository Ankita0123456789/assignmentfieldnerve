import {
  PRIORITY_STYLES,
  STATUS_STYLES,
} from "../../defaultValues/vendorPerformance";
import { RecentIssuesProps } from "../../types/vendorPerformance";

const RecentIssues = ({ issues }: RecentIssuesProps) => {
  return (
    <section className="flex flex-col gap-3 border border-zinc-200 bg-white p-4">
      <div>
        <h3 className="text-sm font-semibold text-zinc-900">Recent Issues</h3>
        <p className="mt-1 text-sm text-zinc-600">
          Latest performance and compliance issues across vendors
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-zinc-50">
            <tr className="border-b border-zinc-200">
              {["Issue ID", "Title", "Vendor", "Priority", "Status", "Raised"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-3 py-2.5 text-xs font-medium tracking-wide whitespace-nowrap text-zinc-500 uppercase"
                  >
                    {header}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr
                key={issue.id}
                className="border-b border-zinc-100 last:border-b-0 hover:bg-zinc-50/80"
              >
                <td className="px-3 py-2.5 font-medium whitespace-nowrap text-zinc-900">
                  {issue.id}
                </td>
                <td className="px-3 py-2.5 text-zinc-700">{issue.title}</td>
                <td className="px-3 py-2.5 whitespace-nowrap text-zinc-700">
                  {issue.vendor}
                </td>
                <td className="px-3 py-2.5 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ${PRIORITY_STYLES[issue.priority]}`}
                  >
                    {issue.priority}
                  </span>
                </td>
                <td className="px-3 py-2.5 whitespace-nowrap">
                  <span
                    className={`inline-flex rounded px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[issue.status]}`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="px-3 py-2.5 whitespace-nowrap text-zinc-600">
                  {issue.raisedOn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentIssues;
