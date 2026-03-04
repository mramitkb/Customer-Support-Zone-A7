import React from 'react';

const ResolveCard = ({resolvedTask}) => {

    return (
        <div className='mt-6'>
            <h1 className='font-semibold text-xl'>Resolved Task</h1>
            <div className='mt-6'>
                 {
                    resolvedTask.length === 0 ? 

                    <h2 className='text-[#627382] font-medium'>No resolved tasks yet.</h2>
                    :

                <div className='space-y-3'>
                    {
                        resolvedTask.map(resolved => <h1 className='font-semibold text-lg bg-[#E0E7FF] px-3 py-4 rounded-xl'>{resolved.title}</h1>)
                    }
                </div>
                 }
            </div>
        </div>
    );
};

export default ResolveCard;