import React from 'react';
import ReactDom from "react-dom";

import { Provider, connect } from 'react-redux'
import store from './store/store'
import "./index.css";
import Router from './router'

// 订阅监听store的变化，手动更新
store.subscribe(() => {
    // ReactDom.render(Router(), document.getElementById('root'))
    console.log(`余额：${store.getState().app.price}`);
});

ReactDom.render(<Provider store={store}>
    {Router()}
</Provider>, document.getElementById('root'))

