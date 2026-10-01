"use client"
import React from 'react';
import toast from "react-hot-toast";
import { IoCallOutline, IoChatbubbleOutline, IoVideocamOutline } from "react-icons/io5";
import { useTimeline } from '@/context/TimelineContext';

const Toaster = ({ friendId, friendName }) => {
    const { addEntry } = useTimeline();

    const handleCheckIn = (type) => {
        addEntry({ type, friendId, friendName });
        toast.success(`${type} with ${friendName} added to timeline!`);
    };

    return (
        <div className="card bg-base-100 shadow-sm p-5">
            <h3 className="font-bold text-[#1F2937] mb-3">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
                <button onClick={() => handleCheckIn("Call")} className="btn btn-outline flex-col h-20 gap-1">
                    <IoCallOutline className="text-xl" />
                    <span className="text-xs">Call</span>
                </button>

                <button onClick={() => handleCheckIn("Text")} className="btn btn-outline flex-col h-20 gap-1">
                    <IoChatbubbleOutline className="text-xl" />
                    <span className="text-xs">Text</span>
                </button>

                <button onClick={() => handleCheckIn("Video")} className="btn btn-outline flex-col h-20 gap-1">
                    <IoVideocamOutline className="text-xl" />
                    <span className="text-xs">Video</span>
                </button>
            </div>
        </div>
    );
};

export default Toaster;