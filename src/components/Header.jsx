'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {

    const pathname = usePathname();
    if (pathname.startsWith('/dashboard')) return <></>

    return (
        <header className="px-4 py-3 border-b-2 border-gray flex justify-between items-center flex-wrap">
            <Link href='/' className='text-lg font-semibold'>😊 Dev Story</Link>

            <nav className='space-x-10'>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/tutorials">Tutorials</NavLink>
                <NavLink href="/stories">Stories</NavLink>
                <NavLink href="/dashboard">Dashboard</NavLink>
                <NavLink href="/about">About</NavLink>
            </nav>
        </header>
    );
};

export default Header;