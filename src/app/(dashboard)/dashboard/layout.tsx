import React from 'react';
import Sidebar from './_components/Sidebar';

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='flex-1 overflow-y-auto p-8'>{children}</div>
        </div>
    );
};

export default layout;
