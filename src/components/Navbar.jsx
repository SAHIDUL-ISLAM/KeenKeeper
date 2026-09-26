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
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <Link href={"/"}>
                        <h1 className="text-2xl font-bold text-[#244D3F]">
                            <span className='font-extrabold text-[#1F2937]'>Keen</span>Keeper
                        </h1>
                    </Link>
                </div>
                <div className="navbar-end gap-2">
                    {navItems.map((item) => {
                        const isActive = item.href === '/'
                            ? pathname === '/'
                            : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`btn ${isActive ? 'bg-[#244D3F] text-white border-[#244D3F]' : ''}`}
                            >
                                <span className='text-2xl'>{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;