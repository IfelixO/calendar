import {React, useState} from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik'

import './css/UserArea.css'

const UserArea = ({handleUserExit, handleLogin}) => {


    const [values, setValues] = useState()

    const handleInputChange = (value) => {
        setValues((prevValue) => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }));
    };

    return ( 
        <div id='userModal'>
            <div className="userarea-background" id='userBackground' onClick={handleUserExit}></div>
            <Formik initialValues={{}}>
                <Form className="userarea-all">
                    <label className="userarea-title">Que bom ter você de volta!</label>

                    <Field required type="text" className='userarea-input' placeholder='Login' name='loginUser' onChange={handleInputChange}/>
                    <ErrorMessage component="span" name='loginUser' className='userarea-login-error'/>

                    <Field required type="password" className='userarea-input' placeholder='Senha' name='passwordUser' onChange={handleInputChange}/>
                    <ErrorMessage component="span" name='password' className='userarea-password-error'/>

                    <button className="userarea-entrar" id='enter2' type="submit" onClick={() => handleLogin(values)}>Entrar</button>
                </Form>
            </Formik>
        </div>
     );
}
 
export default UserArea;