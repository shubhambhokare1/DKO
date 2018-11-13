import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router';
import  createBrowserHistory  from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import './constants/routes';
import { HOME_PATH, ABOUT_PATH, DASHBOARD_PATH } from './constants/routes';

const history = createBrowserHistory();

render(
    (<Router history={history}>
        <Switch>
            <Route exact path={HOME_PATH} component={Home}/>
            <Route path={ABOUT_PATH} component={About}/>
            <Route path={DASHBOARD_PATH} component={Dashboard}/>
        </Switch>
    </Router>), document.getElementById('app')
);
serviceWorker.unregister();