import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Lazy from './components/public/layzComponent'
import Nav from './components/layout/nav'
import IndexPage from './route/index'
import LazyRoute from './route/lazy'
import Egg from './route/egg'
import Life from './route/life'

const Hook = Lazy(() => import('./route/hook'))

const menu = [
    { title: '首页', path: '/' },
    { title: '懒加载测试', path: '/lazy' },
    { title: 'hooks', path: '/hooks' },
    { title: 'Egg', path: '/egg' },
]

const RouterConfig = function () {
    return (
        <Router>
            <div>
                <Nav menu={menu} />
                <Route path="/" exact component={IndexPage} />
                <Route path="/lazy" exact component={LazyRoute} />
                <Route path="/hooks" exact component={Hook} />
                <Route path="/render" exact render={() => <Redirect to="/" />} />
                <Route path="/egg" exact component={Egg} />
                <Route path="/life" exact component={Life} />
            </div>
        </Router>
    )
}
export default RouterConfig