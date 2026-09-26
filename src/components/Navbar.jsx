import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end">
                    <Link href={"/"} className='btn'>Home</Link>
                    <Link href={"/timeline"} className='btn'>Timeline</Link>
                    <Link href={"/stats"} className='btn'>Stats</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;