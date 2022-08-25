import {React, useState} from 'react';

import './css/Task.css'

import editButton from './img/edit.png'
import deleteButton from './img/delete.png'

const  Task = ({task, handleDeletion, handleOpenEdit}) => {

    // const [background, setBackground] = useState('#dc143c')
    let background = 'crimson'
    let description 

    let beginNumber = Number(task.beginHour.split(':').join('.'))
    let endNumber = Number(task.endHour.split(':').join('.'))
    let beginDay = task.beginDate.slice(8,10)
    let endDay = task.endDate.slice(8,10)

    let durationTime = endNumber - beginNumber
    let durationDays = endDay - beginDay + 1

    let taskLeft
    let taskTop
    let taskWidth
    let taskHeight
    

    switch (beginDay) {
        case '21': taskLeft = '12.5%';
        break;
        case '22': taskLeft = '25%';
        break;
        case '23': taskLeft = '37.5%';
        break;
        case '24': taskLeft = '50%';
        break;
        case '25': taskLeft = '62.5%';
        break;
        case '26': taskLeft = '75%';
        break;
        case '27': taskLeft = '87.5%';
        break;
        default: taskLeft = '-100%'
    }

    if (beginDay == endDay) {
        taskHeight = `${durationTime * 80}px`
        taskWidth = '12.5%'
        taskTop = `${beginNumber * 80}px`
        description = 'true'
    } else {
        taskHeight = '30px'
        taskWidth = `${durationDays * 12.5}%`
        taskTop = '-35px'
        description = 'false'
    }



    {task.status == 'done' ? (background= '#228b22') : null }
    {task.status == 'canceled' ? (background= '#444') : null}

    return ( 
        <section className="task-all" style={{backgroundColor: background, height: taskHeight, width: taskWidth, left: taskLeft, top: taskTop }}>
            <h3 className="task-title">{task.title}</h3>
            {description == 'true' ? (
            <p className="task-description">{task.description}</p>
            ): null}
            <div className='task-buttons'>
                <button className="task-button">
                    <img src={editButton} alt="" className='task-button-img' onClick={() => handleOpenEdit(task)}/>
                </button>
                <button className="task-button" onClick={() => handleDeletion(task.id)}>
                    <img src={deleteButton} alt="" className='task-button-img'/>
                </button>
            </div>
        </section>
     );
}
 
export default Task ;