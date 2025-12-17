import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <div className='col-span-3 border-r-2 min-h-screen'>
                <h2>Navigation</h2>

                <div className=''>
                    <Link href={'/add-story'}>Add Story</Link>
                </div>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;