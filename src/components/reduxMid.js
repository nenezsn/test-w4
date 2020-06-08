/**
 * @desc 测试redux的中间件
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

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
        this.props.dispatch({
            type: 'ADDE'
        })
    }
    componentDidMount() {
        this.handleThunk()
    }
    render() {
        return (
            <div>
                {this.props.price}
            </div>
        );
    }
}

export default connect(state=>state.app)(reduxMid);