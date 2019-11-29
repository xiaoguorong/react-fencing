import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect} from "react-router-dom";
// import { Provider } from 'react-redux'
// import store from './redux/index'
import './js/rem.js';
import './style/common.css';
import Index from './pages/index/index'
import Info from './pages/info/index'
import InfoDetail from './pages/info/detail'
import Layout from './pages/layout/index'
ReactDOM.render(
    <HashRouter>
        {/* <Provider store = {store}> */}
            <Layout>
                <Switch>
                    <Route path="/index" component={Index}/>
                    <Route path="/info" component={Info} exact/>
                    <Route path="/info/:id" component={InfoDetail}/>
                    <Route path="/user" component={Info}/>
                    <Redirect to="/index" />
                </Switch>
            </Layout>
        {/* </Provider> */}
      </HashRouter>
    , document.getElementById('root'));

