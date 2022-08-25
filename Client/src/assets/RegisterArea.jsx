import {React, useState} from 'react';
import Axios from 'axios'

import {Formik, Form, Field, ErrorMessage} from 'formik'

import './css/RegisterArea.css'

const RegisterArea = ({handleRegisterExit, handleRegister}) => {

    const [values, setValues] = useState()

    const handleInputChange = (value) => {
        setValues((prevValue) => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }));
    };

    return ( 
        <div id='registerModal'>
            <div className="registerarea-background" id='registerBackground' onClick={handleRegisterExit}></div>
            <Formik initialValues={{}}>
                <Form className="registerarea-all">
                    <label className="registerarea-title">Vamos nos organizar!</label>
                    <Field required type="text" className='registerarea-input' placeholder='Login ' name='loginRegister' onChange={handleInputChange}/>
                    <Field required type="password" className='registerarea-input' placeholder='Senha' name='passwordRegister' onChange={handleInputChange}/>
                    <button className="registerarea-entrar" id='register2' onClick={() => handleRegister(values)}>Cadastrar</button>
                </Form>
            </Formik>
        </div>
     );
}
 
export default RegisterArea;