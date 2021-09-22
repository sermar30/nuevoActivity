import React, { useContext } from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import Mags1 from '../../../img/HomePage/mags1.jpg';
import Mags2 from '../../../img/HomePage/mags2.jpg';
import Mags3 from '../../../img/HomePage/mags3.jpg';
import './HomePage.css';

export const HomePage = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
            <div className='m-3'>
                <h1>Bienvenid@ { user.nombre }</h1>
                <span className='texto-mision'>
                    En ZUMA TI nos preocupamos por brindarte herramientas para que puedas llevar un control adecuado de tus actividades, este portal te servirá para registras tus horas de proyectos, capacitaciones y demás actividades. De igual manera será de ayuda para los líderes al permitirles monitoreas el tiempo dedicado a las actividades asignadas a su equipo.
                </span>
            </div>
            <div id='carouselExampleDark' className='carousel carousel-dark slide carrusel-imagen' data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='1' aria-label='Slide 2'></button>
                    <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='2' aria-label='Slide 3'></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='10000'>
                        <img src={ Mags1 } className='d-block w-100' alt='Mags1' />
                    </div>
                    <div className='carousel-item' data-bs-interval='2000'>
                        <img src={ Mags2} className='d-block w-100' alt='Mags2' />
                    </div>
                    <div className='carousel-item'>
                        <img src={ Mags3 } className='d-block w-100' alt='Mags3' />
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleDark' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </>
    )
}
