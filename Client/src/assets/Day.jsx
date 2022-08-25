import React from 'react';

import './css/Day.css'

import Task from './Task'



const Day = ({tasksSpecific, person, handleDeletion, handleOpenEdit}) => {

    const userFilter = (task) => {
        var userTask
        let beginDay = Number(task.beginDate.slice(8,10))
        let endDay = Number(task.endDate.slice(8,10)) 

        // console.log(task.user == person)

        
        if (beginDay > 20 && endDay < 28 && task.user == person) {
            userTask = task
        }
        return userTask;
    }

    const userTasks = tasksSpecific?.filter(userFilter)

    return ( 
        <section className='day-all'>
            {userTasks?.map((task) => (
                <Task key={task.id} task={task} handleDeletion={handleDeletion} handleOpenEdit={handleOpenEdit}/>
            ))}
        </section>
     );
}
 
export default Day;