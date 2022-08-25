import React, { useState } from 'react';

import './css/AddTask.css'

const AddTask = ({handleAddExit, handleTaskAddition}) => {

    const [values, setValues] = useState()

    const handleInputChange = (value) => {
        setValues((prevValue) => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }));
        console.log(values)
    };

    const handleAddClick= () => {
        if (values.description && values.beginDate && values.beginHour && values.endDate && values.endHour && values.title){
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
        <div id='addModal'>
            <div className="addtask-background" id='addBackground' onClick={handleAddExit}></div>
            <div className="addtask-all">
                <h2 className="addtask-title">Registre os detalhes</h2>
                <form className='form'>
                    <input required type="text" className='addtask-input' placeholder='Título' name='title' onChange={handleInputChange} maxLength='12' id='TT'/>
                    <textarea required type="text"  className='addtask-textarea' placeholder='Descrição' maxLength='30' name='description' onChange={handleInputChange} id='TA'/>
                    <label htmlFor="beginDate" className='addtask-label' id='BDL'>Data de início</label>
                    <input required type="date" className='addtask-input' name='beginDate' onChange={handleInputChange} id='BDI'/>
                    <label htmlFor="beginDate" className='addtask-label' id='BHL'>Horário de início</label>
                    <input required type="time" className='addtask-input' name='beginHour' onChange={handleInputChange} id='BHI'/>
                    <label htmlFor="beginDate" className='addtask-label' id='EDL'>Data do fim</label>
                    <input required type="date" className='addtask-input' name='endDate' onChange={handleInputChange} id='EDI'/>
                    <label htmlFor="beginDate" className='addtask-label' id='EHL'>Horário do fim</label>
                    <input required type="time" className='addtask-input' name='endHour' onChange={handleInputChange} id='EHI'/>
                    <div className="addtask-submit" onClick={handleAddClick} id='BT'>Enviar</div>
                </form>
            </div>
        </div>
     );
}
 
export default AddTask;