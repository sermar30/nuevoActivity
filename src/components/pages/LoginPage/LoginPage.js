import React, { useContext, useState } from 'react';
import CryptoJS from 'crypto-js';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import logologin from '../../../img/NavBar/logozuma.png';
import './LoginPage.css';

export const LoginPage = ({history}) => {

    const { dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const cifrado = CryptoJS.AES.encrypt(password, '1234abcd').toString();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({usuario: email, password: cifrado})
        };
        fetch('http://74.50.54.217:8080/api/auth/login', requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.coderr == 0) {
                    dispatch({
                        type: types.login,
                        payload: {
                            nombre: data.nombre
                        }
                    });
                    history.replace('/home');
                } else {
                    dispatch( {type: types.logout} );
                }
            })
            .catch(err => dispatch( {type: types.logout} ));
    };

    return (
        <div>
            <div className="card login-card">
                <div className="card-body">
                    <div className='mb-3'>
                        <img src={ logologin } alt='LogoZuma' className='logo-zuma'/>
                    </div>
                    <div className="input-group mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Correo Electronico" 
                            aria-label="Username" 
                            aria-describedby="basic-addon1" 
                            autoComplete='true'
                            onChange={
                                (e) => { 
                                    setEmail(e.target.value);
                                }
                            }
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            autoComplete='true'
                            onChange={
                                (e) => { 
                                    setPassword(e.target.value);
                                }
                            }
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-dark" onClick={ handleLogin }>Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
