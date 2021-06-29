import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contribua from '../pages/Contribua'
import Voluntariado from '../pages/Voluntariado'
import Equipe from '../pages/Equipe'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route path='/contribua'component={Contribua} />
                <Route path='/voluntariado' component={Voluntariado} />
                <Route path='/equipe' component={Equipe} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes