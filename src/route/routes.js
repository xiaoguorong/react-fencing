import React from 'react'
import { Router, Route, Link } from 'react-router'
import loadable from '@/js/loadable'

const routeConfig = [
{   path: '/',
    component: App,
    indexRoute: { component: import },
    // childRoutes: [
    //     { path: 'about', component: About },
    //     { path: 'inbox',
    //     component: Inbox,
    //     childRoutes: [
    //         { path: '/messages/:id', component: Message },
    //         { path: 'messages/:id',
    //         onEnter: function (nextState, replaceState) {
    //             replaceState(null, '/messages/' + nextState.params.id)
    //         }
    //         }
    //     ]
    //     }
    // ]
}]
  
React.render(<Router routes={routeConfig} />, document.body)