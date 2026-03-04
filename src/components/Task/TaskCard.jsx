import React from 'react';

const TaskCard = ({taskTicket, handleRemoveTask}) => {
    return (
        <div>
            
            <div className='space-y-3 bg-white p-5 rounded-xl shadow-lg'>
                <h1 className='font-semibold text-lg'>{taskTicket.title}</h1>
                <button onClick={() => handleRemoveTask(taskTicket)} className='btn w-full bg-green-600 text-white border-none text-base'>Complete</button>
            </div>
        </div>
    );
};

export default TaskCard;