import Link from 'next/link';
import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className=" footer-horizontal footer-center bg-[#244D3F]  rounded pt-10 pb-5 text-white ">
            <div className='max-w-10xl m-auto space-y-5'>
            <h1 className='text-3xl sm:text-5xl font-bold'>KeenKeeper</h1>
            <p className='text-[#efeaeacc]'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
            <nav>
                <h2 className='text-lg sm:text-xl font-semibold pb-2.5'>Social Links</h2>
                <div className="grid grid-flow-col gap-4">
                <Link href={"/instagram"} className='bg-white p-2.5 text-black border rounded-3xl'><FaInstagram /></Link>
                <Link href={"/facebook"}  className='bg-white p-2.5 text-black border rounded-3xl'><CiFacebook /></Link>
                <Link href={"/twitter"}  className='bg-white p-2.5 text-black border rounded-3xl'><FaXTwitter /></Link>
                </div>
            </nav>
            <div className="sm:flex justify-between items-center w-full border-t-2 border-[#97959540] text-[gray] pt-3">
                <div className='div1'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex flex-col  sm:flex-row justify-evenly gap-0 sm:gap-6 items-center'>
                    <Link href={"/privacyPolicy"} className="link link-hover">Privacy Policy</Link>
                    <Link href={"termsOfService"} className="link link-hover">Terms of Service</Link>
                    <Link href={"cookies"} className="link link-hover">Cookies</Link>
                </div>
            </div>
            </div>
            </footer>
    );
};

export default Footer;