import React from 'react';
import TaskCard from './TaskCard';
import ResolveCard from './ResolveCard';

const Tasks = ({customerTicket, setCustomerTicket, handleRemoveTask, resolvedTask}) => {
    
    return (
        <div className='col-span-3'>
            <div>
                <h1 className='font-semibold text-xl'>Task Status</h1>
            <div className='mt-6'>
                 {
                    customerTicket.length === 0 ? 

                    <h2 className='text-[#627382] font-medium'>Select a ticket to add to Task Status</h2>
                    :

                <div className='space-y-3'>
                    {
                        customerTicket.map(taskTicket => <TaskCard key={taskTicket.id} taskTicket={taskTicket} customerTicket={customerTicket} setCustomerTicket={setCustomerTicket} handleRemoveTask={handleRemoveTask}></TaskCard>)
                    }
                </div>
                 }
            </div>
            <ResolveCard resolvedTask={resolvedTask}></ResolveCard>
            </div>
        </div>
    );
};

export default Tasks;