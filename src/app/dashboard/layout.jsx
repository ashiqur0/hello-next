import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-3 border-r-2 min-h-screen'>
                <Link href='/' className='text-lg font-semibold'>😊 Dev Story</Link>

                <div className='flex flex-col mt-10 pr-4'>
                    <Link href={'/dashboard/add-story'} className='hover:bg-gray-700 p-4 rounded'>Add Story</Link>
                    <Link href={'/dashboard/my-profile'} className='hover:bg-gray-700 p-4 rounded'>My Profile</Link>
                    <Link href={'/settings'} className='hover:bg-gray-700 p-4 rounded'>Settings</Link>
                </div>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;