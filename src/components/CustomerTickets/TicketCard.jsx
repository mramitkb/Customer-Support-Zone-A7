import React from 'react';
import { FaCircle } from 'react-icons/fa6';
import { LuCalendar } from 'react-icons/lu';

const TicketCard = ({ticket, handleCustomerTicket}) => {

    const {id, title, description, customer, priority, createdAt, status} = ticket;
    console.log(status);
    return (
        <div onClick={() => handleCustomerTicket(ticket)} className='cursor-pointer transition-transform duration-700 hover:scale-103 rounded-xl p-5 py-10 bg-white shadow-xl space-y-3'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-xl'>{title}</h1>
                <div className={`flex items-center justify-center gap-1 px-2 py-1 rounded-2xl ${status === "Open" ? "bg-[#B9F8CF] " : "bg-[#F8F3B9] "}`}>
                    <FaCircle className={`${status === "Open" ? "text-[#02A53B]" : "text-[#FEBB0C]"}`}/>
                    <p className={`${status === "Open" ? "text-[#02A53B]" : "text-[#9C7700]"}`}>{status}</p>
                </div>
            </div>
            <p className='text-[#627382]'>{description}</p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-center gap-3'>
                    <p className='text-[#627382] font-semibold'>#{id}</p>
                    <p className={`font-medium text-sm ${priority === "HIGH PRIORITY" ? "text-red-500": "text-[#FEBB0C]"}`}>{priority}</p>
                </div>
                <div className='flex items-center justify-center gap-3 text-[#627382]'>
                    <h2 className='font-medium'>{customer}</h2>
                    <div className='flex items-center justify-center gap-1'>
                        <LuCalendar />
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;