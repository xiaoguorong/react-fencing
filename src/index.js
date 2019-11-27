import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import './js/rem.js';
import './style/common.css';
import index from './pages/index/index'
import user from './pages/user/index'
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/a" component={index}/>
            <Route path="/index" component={index}/>
            <Route path="/user" component={user}/>
            <Redirect to="/index" />
        </Switch>
      </HashRouter>
    , document.getElementById('root'));

