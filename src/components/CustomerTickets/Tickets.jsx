import React from 'react';
import TicketCard from './TicketCard';

const Tickets = ({ allTickets, handleCustomerTicket}) => {

    return (
        <div className='col-span-9'>
            <h1 className='font-semibold text-xl'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-6'>
                {
                    allTickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} handleCustomerTicket={handleCustomerTicket}></TicketCard>)
                }
            </div>
        </div>
    );
};

export default Tickets;