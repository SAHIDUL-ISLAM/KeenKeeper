"use client";
import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

const Stats = () => {
    const { entries } = useTimeline();

    const count = (type) => entries.filter((e) => e.type === type).length;

    const data = [
        { name: "Text", value: count("Text"), fill: "#7e35e1" },
        { name: "Call", value: count("Call"), fill: "#244d3f" },
        { name: "Video", value: count("Video"), fill: "#37a163" },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1F2937] mb-6">
                Friendship Analytics
            </h1>

            <div className="card bg-base-100 shadow-sm p-6">
                <h2 className="text-lg text-[#244D3F] mb-4">By Interaction Type</h2>

                {entries.length === 0 ? (
                    <p className="text-center text-gray-500 py-16">
                        No interactions yet. Log a Call, Text or Video to see the chart.
                    </p>
                ) : (
                    <PieChart
                        style={{
                            width: "100%",
                            maxWidth: "360px",
                            maxHeight: "60vh",
                            margin: "auto",
                            aspectRatio: 1,
                        }}
                        responsive
                    >
                        <Pie
                            data={data}
                            innerRadius="70%"
                            outerRadius="100%"
                            cornerRadius="8%"
                            paddingAngle={4}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend iconType="circle" iconSize={8} />
                        <Tooltip />
                    </PieChart>
                )}
            </div>
        </div>
    );
};

export default Stats;