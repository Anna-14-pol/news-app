import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage/home';
import InsurancePage from './insurance';
import HelpPage from './help';
import './main.css';

const Main =()=>(
    <main>
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route exact path='/insurance'>
                <InsurancePage />
            </Route>
            <Route exact path='/help'>
                <HelpPage />
            </Route>
        </Switch>
    </main>
);

export default Main;

