import React from 'react';
import {render} from 'react-dom';
import './style/index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

render(
    (<HashRouter>
        <div>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/dashboard" component={Dashboard}/>
        </div>
    </HashRouter>), document.getElementById('app')
);
serviceWorker.unregister();
