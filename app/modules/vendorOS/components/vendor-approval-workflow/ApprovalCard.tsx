"use client";

import { useState } from "react";
import { ApprovalCardProps } from "../../types/vendorApproval";
import Tag from "./Tag";
import { actionToStatus } from "../../defaultValues/vendorApproval";


const ApprovalCard = ({ item, onStatusChange, onAddComment }: ApprovalCardProps) => {
  const [comment, setComment] = useState("");
  const isActionable = item.status === "Pending" || item.status === "On Hold";

  const handleAddComment = () => {
    const text = comment.trim();
    if (!text) return;
    onAddComment(item.id, text);
    setComment("");
  };

  return (
    <article className="flex flex-col gap-4 border border-zinc-200 bg-white p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-zinc-900">{item.vendorName}</h3>
          <p className="mt-1 text-sm text-zinc-600">
            {item.vendorCode} · {item.category}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Submitted by {item.submittedBy} on {item.submittedOn}
          </p>
        </div>
        <Tag status={item.status} />
      </div>

      <section className="flex flex-col gap-2">

      </section>

      <section className="flex flex-col gap-2">
        <h4 className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
          Comments
        </h4>
        {item.comments.length === 0 ? (
          <p className="text-sm text-zinc-500">No comments yet.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {item.comments.map((entry) => (
              <li
                key={entry.id}
                className="border border-zinc-100 bg-zinc-50 px-3 py-2"
              >
                <p className="text-sm text-zinc-800">{entry.text}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {entry.author} · {entry.at}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Add a comment"
            className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-zinc-500"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleAddComment();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAddComment}
            className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Comment
          </button>
        </div>
      </section>

      <div className="flex flex-wrap gap-2 border-t border-zinc-100 pt-3">
        <button
          type="button"
          disabled={!isActionable}
          onClick={() => onStatusChange(item.id, actionToStatus.Approve, "Approve")}
          className="rounded bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Approve
        </button>
        <button
          type="button"
          disabled={!isActionable}
          onClick={() => onStatusChange(item.id, actionToStatus.Reject, "Reject")}
          className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Reject
        </button>
        <button
          type="button"
          disabled={!isActionable}
          onClick={() =>
            onStatusChange(item.id, actionToStatus["Request Changes"], "Request Changes")
          }
          className="rounded border border-purple-300 bg-purple-50 px-3 py-2 text-sm font-medium text-purple-800 hover:bg-purple-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Request Changes
        </button>
      </div>
    </article>
  );
};

export default ApprovalCard;
