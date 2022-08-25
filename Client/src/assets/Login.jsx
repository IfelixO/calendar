import React from 'react';


import './css/Login.css'

import user from './img/user.png'
import register from './img/register.png'
import logout from './img/logout.png'

const Login = ({handleRegisterShow, handleUserShow, handleLogout}) => {
    return ( 
        <section className="login-all" >
            <button className='login-enter' id='enter1' onClick={handleUserShow}>
                    <img src={user} alt="" className='login-img' />
                    <p>Entrar</p>
            </button>
            <button className='login-register' id='register1' onClick={handleRegisterShow}>
                <img src={register} alt="" className='login-img' />
                <p>Cadastrar</p>
            </button>
            <button className="login-logout" onClick={handleLogout}>
                <img src={logout} alt="" title='Sair' className='login-logout-img' />
            </button>
        </section>
     );
}
 
export default Login;