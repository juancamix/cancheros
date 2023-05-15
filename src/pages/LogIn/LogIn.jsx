import React, { useState } from 'react'

import "./LogIn.css"
import { Link, useNavigate} from 'react-router-dom';
import { send } from '@emailjs/browser';
export const MainLogin = () => {

    const navigate =useNavigate()

    const [clas, setClas] = useState(false);

    const removePanel = () =>{
        setClas (false)
    }

    const  putPanel = () =>{
        setClas(true)
    }

    const send = () =>{
        navigate('/')
    }


return (
    <main className='MainLogin'> 
        <div className='contenedorTodo' >
            <div className='cajaTrasera'>
                <div className='cajaTraseraLogin'>
                    <h3>¿Ya tienes cuenta?</h3>
                    <p>Inicia sesión para entrar en la pagina</p>
                    <button id='btnIniciarSesion' onClick={removePanel}>Iniciar Sesion</button>
                </div>
                <div className='cajaTraseraRegistro'>
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión</p>
                    <button id="btnRegistrarse" onClick={putPanel}>Regístrarse</button>
                </div>
            </div>

                <div className='contenedorLogin'>
                <form action="" className={`formularioLogin ${clas ? "newLogin": ""}`}>
                <h2> Iniciar Sesion</h2>
                <input type="email" placeholder='Correo Electronico' required />
                <input type="password" placeholder='Contraseña' required/>
                <button onClick={send}> Entrar
                </button>
                </form>
                </div>
                <div className={`contenedorRegister ${clas ? "newContent": ""}`}>
                <form action="" className={`formularioRegistro ${clas ? "newRegister": ""}`}>
                    <h2>Registrarse</h2>
                    <input type="text" placeholder='Nombre Completo' />
                    <input type="email" placeholder='Correo Electronico' required />
                    <input type="text" placeholder='Usuario' />
                    <input type="password" placeholder='Contraseña' required />
                    <input type="password" placeholder='Repite la Contraseña' required />
                    <button>Registrarse</button>
                </form>
                </div>
            </div>
    </main>
    )
}
    