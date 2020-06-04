import React from 'react';
import ReactDom from "react-dom";
import { Provider,connect } from 'react-redux'
import store from './store/store'
import "./index.css";
import styles from "./index.less";
import Ref from './components/hooks/testuseRef'

class Index extends React.Component {
    delay= time =>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({
                    type:'ADD_PRICE'
                }) 
            }, time * 1000);
        })
    }
    handleThunk=()=>{
        this.props.dispatch((dispatch)=>{
            dispatch( {
                type:'ADD_PRICE'
            })
        })  
    }
    handlePromise=()=>{
        this.props.dispatch(this.delay(3))
    }
    handleSaga=()=>{
        this.props.dispatch({
            type:'ADDE'
        })
    }
    componentDidMount(){
        this.handleThunk()
    }
    render() {
        return <div className={styles.red}>
            {/* <Ref /> */}
            {this.props.price}
        </div>
    }
}
const App  = connect(state=>state.app)(Index)
ReactDom.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))

