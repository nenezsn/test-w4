/**
 * @desc 测试redux的中间件
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store/store'

class reduxMid extends Component {
    delay = time => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    type: 'ADD_PRICE'
                })
            }, time * 1000);
        })
    }
    handleThunk = () => {
        this.props.dispatch((dispatch) => {
            dispatch({
                type: 'ADD_PRICE'
            })
        })
    }
    handlePromise = () => {
        this.props.dispatch(this.delay(3))
    }
    handleSaga = () => {
        console.log('this',store.getState(),this.props.price)
        this.props.dispatch({
            type: 'ADDE'
        })
        console.log('this',store.getState(),this.props.price)
    }
    render() {
        return (
            <div>
                {this.props.price}
                <button onClick={this.handleThunk}>thunk</button>
                <button onClick={this.handlePromise}>promise</button>
                <button onClick={this.handleSaga}>handleSaga</button>
            </div>
        );
    }
}

export default connect(state=>state.app)(reduxMid);