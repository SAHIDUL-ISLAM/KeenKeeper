import Link from 'next/link';
import React from 'react';
import friends from '../../public/friends.json';

const Banner = () => {
    const total = friends.length;
    const onTrack = friends.filter((f) => f.status === 'on-track').length;
    const needAttention = friends.filter((f) => f.status === 'overdue' || f.status === 'almost due').length;

    return (
        <div className='flex flex-col justify-center items-center px-4 pt-10 sm:pt-15 text-center border-[#97959540] mx-3.5 border-b-2'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#244D3F] max-w-3xl'>
                Friends to keep close in your life
            </h1>
            <p className='pt-5 pb-6 sm:pt-7 sm:pb-7 text-sm sm:text-base text-[#64748B] max-w-xl'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
            </p>
            <Link href={"/addFriedn"}>
                <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
            </Link>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3.5 my-10 w-full max-w-3xl'>
                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="flex flex-col justify-center items-center p-3">
                        <h2 className="card-title text-[#244D3F] font-bold">{total}</h2>
                        <p className='text-[#64748B] text-xs sm:text-sm text-center'>Total Friends</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="flex flex-col justify-center items-center p-3">
                        <h2 className="card-title text-[#244D3F] font-bold">{onTrack}</h2>
                        <p className='text-[#64748B] text-xs sm:text-sm text-center'>On Track</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="flex flex-col justify-center items-center p-3">
                        <h2 className="card-title text-[#244D3F] font-bold">{needAttention}</h2>
                        <p className='text-[#64748B] text-xs sm:text-sm text-center'>Need Attention</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-md shadow-sm">
                    <div className="flex flex-col justify-center items-center p-3">
                        <h2 className="card-title text-[#244D3F] font-bold">12</h2>
                        <p className='text-[#64748B] text-xs sm:text-sm text-center'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;