import React from 'react';
import ReactDom from "react-dom";

import { Provider, connect } from 'react-redux'
import store from './store/store'
import "./index.css";
import Router from './router'


ReactDom.render(<Provider store={store}>
    {Router()}
</Provider>, document.getElementById('root'))

