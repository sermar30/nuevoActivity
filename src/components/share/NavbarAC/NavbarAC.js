import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import logo1 from '../../../img/NavBar/logozuma.png';
import defaultAvatar from '../../../img/NavBar/perfil.png'; 
import './NavbarAC.css';

export const NavbarAC = ( ) => {

    const { dispatch, user } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');
        dispatch( {type: types.logout} );
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={ logo1 } alt='Logo' width='30' height='30' className='d-inline-block align-text-top' />
                <a className="navbar-brand" href="#">Activity Control</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <div>
                        <img src={ defaultAvatar } alt='AvatarDefault' width='30' height='30' className='d-inline-block align-text-top avatar-default me-2' />
                        <span className='me-2'>{ user ? user.nombre : 'Usuario' }</span>
                        <button className='btn btn-outline-danger' type='submit' onClick={ handleLogout }>Salir</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
