import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { NavbarAC } from '../components/share/NavbarAC/NavbarAC'
import { HomePage } from '../components/pages/HomePage/HomePage'

export const NavbarRoutes = () => {
    return (
        <>
            <NavbarAC />
            <div className='container'> 
                <Switch>
                    <Route exact path='/home' component={ HomePage }/>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        </>
    )
}
