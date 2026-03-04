import React from 'react';
import vector1 from "../../assets/vector1.png"

const Banner = ({customerTicket, resolvedTask}) => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between gap-15 w-11/12 mx-auto py-16'>
            <div className='relative flex-1 py-16 md:h-60 w-full text-center space-y-2 flex items-center justify-center flex-col text-white rounded-xl bg-linear-to-r from-[#6530E4] to-[#9C5FF1]'>
                <img className='absolute top-0 left-0' src={vector1} alt="" />
                <p className='font-medium text-xl'>In-Progress</p>
                <p className='font-bold text-4xl'>{customerTicket.length}</p>
                <img className='absolute top-0 right-0 transform scale-x-[-1]' src={vector1} alt="" />
            </div>
            <div className='relative flex-1 py-16 md:h-60 w-full text-center space-y-2 flex items-center justify-center flex-col text-white rounded-xl bg-linear-to-r from-[#54CF68] to-[#00827A]'>
                <img className='absolute top-0 left-0' src={vector1} alt="" />
                <p className='font-medium text-xl'>Resolved</p>
                <p className='font-bold text-4xl'>{resolvedTask.length}</p>
                <img className='absolute top-0 right-0 transform scale-x-[-1]' src={vector1} alt="" />
            </div>
        </div>
    );
};

export default Banner;