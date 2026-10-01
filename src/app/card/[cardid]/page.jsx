import React from 'react';
import friends from '../../../../public/friends.json';
import Image from 'next/image';
import { IoArchiveOutline, IoCallOutline, IoChatbubbleOutline, IoNotificationsOutline, IoVideocamOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Toaster from '@/components/Toaster';

const cardpage = async ({ params }) => {
    const { cardid } = await params;

    const person = friends.find((f) => String(f.id) === cardid);

    if (!person) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-[#244D3F]">Friend not found</h2>
            </div>
        );
    }

    return (
<div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="md:col-span-1 flex flex-col gap-4">
                <div className="card bg-base-100 shadow-sm items-center text-center p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border">
                        <Image
                            src={person.picture}
                            height={96}
                            width={96}
                            alt={person.name}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <h2 className="text-xl font-bold mt-3">{person.name}</h2>

                    <span className="badge bg-red-500 text-white border-none px-4 py-3 mt-3">
                        {person.status}
                    </span>
                    <span className="badge bg-emerald-100 text-emerald-700 border-none px-4 py-3 mt-2">
                        {person.tags}
                    </span>

                    <p className="text-gray-500 italic text-sm mt-4">{person.bio}</p>
                    <p className="text-gray-400 text-xs mt-1">{person.email}</p>
                </div>

                <div className="card bg-base-100 shadow-sm p-2">
                    <button className="btn btn-ghost justify-start gap-2 w-full">
                        <IoNotificationsOutline className="text-lg" /> Snooze 2 Weeks
                    </button>
                    <button className="btn btn-ghost justify-start gap-2 w-full">
                        <IoArchiveOutline className="text-lg" /> Archive
                    </button>
                    <button className="btn btn-ghost justify-start gap-2 w-full text-red-500">
                        <RiDeleteBin6Line className="text-lg" /> Delete
                    </button>
                </div>
            </div>


            <div className="md:col-span-2 flex flex-col gap-4">

                <div className="grid grid-col-2 sm:grid-cols-3 gap-4">
                    <div className="card bg-base-100 shadow-sm items-center text-center p-4">
                        <h3 className="text-2xl font-bold text-[#244D3F]">{person.days_since_contact}</h3>
                        <p className="text-gray-500 text-sm">Days Since Contact</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm items-center text-center p-4">
                        <h3 className="text-2xl font-bold text-[#244D3F]">{person.goal}</h3>
                        <p className="text-gray-500 text-sm">Goal (Days)</p>
                    </div>
                    <div className="card bg-base-100 shadow-sm items-center text-center p-4">
                        <h3 className="text-2xl font-bold text-[#244D3F]">{person.next_due_date}</h3>
                        <p className="text-gray-500 text-sm">Next Due</p>
                    </div>
                </div>

    
                <div className="card bg-base-100 shadow-sm p-5 flex-row justify-between items-center">
                    <div>
                        <h3 className="font-bold text-[#1F2937]">Relationship Goal</h3>
                        <p className="text-gray-500 mt-1">
                            Connect every <span className="font-bold">30 days</span>
                        </p>
                    </div>
                    <button className="btn btn-outline btn-sm">Edit</button>
                </div>
                <Toaster friendId={person.id} friendName={person.name} />
            </div>
        </div>
    );
};

export default cardpage;