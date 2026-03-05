import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-100 w-full col-span-9'>
            <span className="loading loading-spinner loading-xl font-bold text-2xl"></span>
        </div>
    );
};

export default Loading;