import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import index from './pages/index/index'
import user from './pages/user/index'
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/a" component={index}/>
            <Route path="/index" component={index}/>
            <Route path="/user" component={user}/>
            <Redirect to="/" />
        </Switch>
      </HashRouter>
    , document.getElementById('root'));

