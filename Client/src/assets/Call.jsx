import {useState, React} from 'react';

import "./css/call.css"

import add from './img/add.png'

const Call = ({handleAddShow,person,addButtonVisibility}) => {

    return ( 
        <section className="call-all">
            <div className="call-call">
                {person == 'default' ? (
                    <h1>Olá!</h1>
                ) : (
                    <h1>Olá {person}!</h1>
                )}
            </div>
            {addButtonVisibility ? (
                <button className="call-add" onClick={handleAddShow}>
                    <img src={add} alt="" className='call-add-img'/>
                    <p>Adicionar Tarefa</p>
                </button>
            ) : null}
        </section>

     );
}
 
export default Call;