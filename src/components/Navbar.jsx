'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ImStatsDots } from 'react-icons/im';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';

const navItems = [
    { href: '/', label: 'Home', icon: <RiHome2Line /> },
    { href: '/timeline', label: 'Timeline', icon: <IoTimeOutline /> },
    { href: '/stats', label: 'Stats', icon: <ImStatsDots /> },
];

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <div className="navbar flex flex-col sm:flex-row bg-base-100 shadow-sm">
                <div className="navbar-center sm:navbar-start">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-bold text-[#244D3F]">
                            <span className='font-extrabold text-[#1F2937]'>Keen</span>Keeper
                        </h1>
                    </Link>
                </div>
                <div className="navbar-end flex-wrap justify-center sm:justify-end gap-2">
                    {navItems.map((item) => {
                        const isActive = item.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`btn border-transparent transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-[#244D3F] text-white hover:bg-[#1C3B30] border-[#244D3F]'
                                        : 'bg-transparent text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <span className='text-lg md:text-2xl'>{item.icon}</span>
                                <span className='hidden sm:inline'>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;