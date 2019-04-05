import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Login from './pages/Login'
import Main from './layout/Main';

export default props => 
    <Switch>
        <Route path="/" exact render={() => <Main {...props}>Home</Main>} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to='/' />
    </Switch>