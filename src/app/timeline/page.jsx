"use client";
import { useState } from "react";
import Link from "next/link";
import { useTimeline } from "@/context/TimelineContext";
import { IoCallOutline, IoChatbubbleOutline, IoVideocamOutline } from "react-icons/io5";

const icons = {
    Call: <IoCallOutline className="text-xl" />,
    Text: <IoChatbubbleOutline className="text-xl" />,
    Video: <IoVideocamOutline className="text-xl" />,
};

const Timeline = () => {
    const { entries } = useTimeline();
    const [filter, setFilter] = useState("All");

    const filtered =
        filter === "All" ? entries : entries.filter((e) => e.type === filter);

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Timeline</h1>

            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="select select-bordered w-full max-w-xs mb-6"
            >
                <option value="All">Filter timeline (All)</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>

            {filtered.length === 0 ? (
                <p className="text-gray-500">
                    {entries.length === 0
                        ? "No interactions yet."
                        : `No ${filter} entries yet.`}
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {filtered.map((entry) => (
                        <Link key={entry.id} href={`/card/${entry.friendId}`}>
                            <div className="card bg-base-100 shadow-sm p-4 flex-row items-center gap-4">
                                {icons[entry.type]}
                                <div>
                                    <p className="font-semibold">
                                        {entry.type}{" "}
                                        <span className="font-normal text-gray-500">
                                            with {entry.friendName}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(entry.date).toLocaleString("en-US", {
                                            dateStyle: "medium",
                                            timeStyle: "short",
                                        })}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;