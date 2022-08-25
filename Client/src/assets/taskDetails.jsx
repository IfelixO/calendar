import {React, useState} from 'react';

import './css/taskDetails.css'

import arrow from './img/arrow.png'

const TaskDetails = ({handleEdit, setDetaisVisibilty, taskDetails}) => {

    let beginDateBR = taskDetails.beginDate.split('-').reverse().join('/')
    let endDateBR = taskDetails.endDate.split('-').reverse().join('/')

    let status 
    switch (taskDetails.status) {
        case 'pending': status = 'Pendente'
            break;
        case 'canceled': status = 'Cancelada'
            break;        
        case 'done': status = 'Concluída'
            break;
        default: status = 'Inválido'
            break;
    }

    const [values, setValues] = useState()

    const handleInputChange = (value) => {
        setValues((prevValue) => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }));
    };


    const handleEditClick= () => {
        if (values.description && values.beginDate && values.beginHour && values.endDate && values.endHour && values.status){
            let newBeginDay = Number(values.beginDate.slice(8,10))
            let newEndDay = Number(values.endDate.slice(8,10))

            if (newBeginDay < 21 || newBeginDay > 27 || newEndDay < 21 || newEndDay > 27) {
                alert('Por favor, inclua atividades entre os dias 21/08/2022 e 27/08/2022 ')
            } else {
                if (newBeginDay > newEndDay) {
                    alert('O dia do fim não pode ser anterior ao dia de início')
                } else {
                    if (values.endHour < values.beginHour && newBeginDay == newEndDay) {
                        alert('O horário do fim não pode ser anterior ao horário de início')
                    } else {
                        handleTaskAddition(values)
                        console.log('ok')
                    }
                }   
            }            
        } else {
            console.log('falta algo')
            alert('Por favor, preencha todos os campos')
        }
    }

    return ( 
        <div id='userModal'>
            <div className="taskDetails-background" id='userBackground' onClick={() => setDetaisVisibilty(false)}></div>
            <form className="taskDetails-all">
                <label className="taskDetails-title">{taskDetails.title}</label>
                <section className='details'>
                    <div className="previous">
                        <textarea required type="text" value= {taskDetails.description} className='taskDetails-textarea' placeholder='Descrição' readOnly name='description'/>
                        <div className="taskDetails-inputs">
                            <div className='taskDetails-group'>
                                <label htmlFor="beginDate" className='taskDetails-label'>Data de início</label>
                                <p className="previous-values">{beginDateBR}</p>
                            </div>
                            <div className="taskDetails-group">
                                <label htmlFor="beginDate" className='taskDetails-label'>Horário de início</label>
                                <p className="previous-values">{taskDetails.beginHour}</p>
                            </div>
                            <div className="taskDetails-group">
                                <label htmlFor="beginDate" className='taskDetails-label'>Data do fim</label>
                                <p className="previous-values">{endDateBR}</p>
                            </div>
                            <div className="taskDetails-group">
                                <label htmlFor="beginDate" className='taskDetails-label'>Horário do fim</label>
                                <p className="previous-values"> {taskDetails.endHour}</p>
                            </div>  
                        </div>   
                        <p className="taskDetails-status">{status}</p>
                    </div>
                    <img src={arrow} alt="" className='details-img'/>
                    <div className='new'>
                        
                        <textarea required type="text"  className='taskDetails-textarea' placeholder='Descrição' maxLength='30' name='description' onChange={handleInputChange} id='TA'/>
                            <label htmlFor="beginDate" className='taskDetails-label' id='BDL'>Data de início</label>
                            <input required type="date" className='taskDetails-input' name='beginDate' onChange={handleInputChange} id='BDI'/>
                            <label htmlFor="beginDate" className='taskDetails-label' id='BHL'>Horário de início</label>
                            <input required type="time" className='taskDetails-input' name='beginHour' onChange={handleInputChange} id='BHI'/>
                            <label htmlFor="beginDate" className='taskDetails-label' id='EDL'>Data do fim</label>
                            <input required type="date" className='taskDetails-input' name='endDate' onChange={handleInputChange} id='EDI'/>
                            <label htmlFor="beginDate" className='taskDetails-label' id='EHL'>Horário do fim</label>
                            <input required type="time" className='taskDetails-input' name='endHour' onChange={handleInputChange} id='EHI'/>
                        <select name="status" id="ST" className='taskDetails-select' onChange={handleInputChange}>
                            <option value="pending">Status</option>
                            <option value="pending">Pendente</option>
                            <option value="done">Concluída</option>
                            <option value="canceled">Cancelada</option>
                        </select>    
                    </div>
                </section>
                <div className="taskDetails-button" type='submit' onClick={handleEditClick}>Enviar</div>
            </form>
        </div>
     );
}
 
export default TaskDetails;