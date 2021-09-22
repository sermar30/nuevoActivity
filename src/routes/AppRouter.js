import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';  
import { LoginPage } from '../components/pages/LoginPage/LoginPage';
import { NavbarRoutes } from './NavbarRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router basename='/nuevoActivity'>
            <div>
                <Switch>
                    <Route exact path='/login' component={ LoginPage } />
                    <PrivateRoute path='/' component={ NavbarRoutes } isAuthenticated={ user.logged } />
                </Switch>
            </div>
        </Router>
    )
}
