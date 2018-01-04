import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Login from '../containers/Login'
import Layout from '../containers/Layout'
//按需加载
const Users = (location, cb) => {
    require.ensure([], require => {
        cb(null, require(`../containers/Users`).default)
    },'users')
}

const Usersbill = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Usersbill').default)
    },'usersbill')
}

const Present = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/Present').default)
    },'present')
}

const ErrorPage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/ErrorPage').default)
    },'ErrorPage')
}

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/">
                    {/* LOGIN */} 
                    <IndexRedirect to="login" />
                    <Route path="login" component={Login}>
                    </Route>
                    {/* User */} 
                    <Route path="index" component={Layout}>
                        <IndexRedirect to="users" />
                        <Route path="users" getComponent={Users}/>
                        <Route path="usersbill" getComponent={Usersbill}/>
                        <Route path="present" getComponent={Present}/>
                    </Route>
                    <Route path="*" getComponent={ErrorPage}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
