import React from 'react';
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import store from './store/store'
import "./index.css";
import styles from "./index.less";

class Index extends React.Component {

    render() {
        return <div className={styles.red}>

        </div>
    }
}
ReactDom.render(<Provider store={store}>
    <Index />
</Provider>, document.getElementById('root'))

