import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Lazy from './components/public/layzComponent'
import Nav from './components/layout/nav'
import IndexPage from './route/index'
import Test from './route/test'

const Hook  = Lazy(()=>import('./route/hook'))

const menu = [
    { title: '首页', path: '/'},
    { title: '测试', path: '/test'},
    { title: 'hooks', path: '/hooks'},
]

const RouterConfig = function () {
    return (
        <Router>
            <div>
                <Nav menu={menu} />
                <Route path="/" exact component={IndexPage} />
                <Route path="/test" exact component={Test} />
                <Route path="/hooks" exact component={Hook} />
            </div>
        </Router>
    )
}
export default RouterConfig