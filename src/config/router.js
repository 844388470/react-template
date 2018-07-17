import React from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect,IndexRedirect,browserHistory } from 'react-router'
import App from '../App'
import * as Index from '../pages/index'
import navkeep from '../pages/navkeep'

// import * as menu from '@pages/menu' // 菜单
function onEntry(e,replace,back){
    console.log(e)
    if(e.location.pathname.indexOf('system')!==-1){
        
    }else{
        replace({ pathname: '/login' })
        setTimeout(()=>{
            back()
        },2000)
    }
}


export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={onEntry}>
            <IndexRedirect to="home"/>
            <Route path="/home" component={Index.home} />
            <Route path="/a" component={navkeep.a} />
            <Route path="/b" component={navkeep.b} />
            <Route path="/c" component={navkeep.c} />
        </Route>
        <Route path="/login" component={Index.login} />
        <Route path="*" component={Index.errors} />
    </Router>
)
