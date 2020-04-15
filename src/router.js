import React from 'react'
import { Router, Route } from 'dva/router';
function RouterConfig({ history, app }) {
    const routes = [
        {
            path: '/',
            name: '/',
            getComponent(nextState, cb) {
                require.ensure([], require => {
                    cb(null, require('./routes/index'))
                })
            }
        }
    ]
    return <Router history={history} routes={routes} />;
}
export default RouterConfig;
