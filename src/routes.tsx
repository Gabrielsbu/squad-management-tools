import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import CreateTeam from './pages/CreateTeam';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/team" component={CreateTeam}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;