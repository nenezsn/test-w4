
import dva from 'dva';
import { browserHistory } from 'dva/router';
import appModel from './models/app'
import routerConfig from './router'
import './index.css'
// 1. Initialize
const app = dva({
    history:browserHistory,
});

window._app = app

// 2. Plugins
// app.use({});

// 3. Model
app.model(appModel)
// 4. Router
app.router(routerConfig);

// 5. Start
app.start('#root');
