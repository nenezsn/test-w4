/**
 * @desc 测试redux的中间件
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store/store'
import { bindActionCreators } from 'redux'

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
        console.log('this', store.getState(), this.props.price)
        this.props.dispatch({
            type: 'ADDE'
        })
        console.log('this', store.getState(), this.props.price)
    }
    render() {
        console.log(this)
        return (
            <div>
                {this.props.price}{store.getState().app.price}
                <button onClick={this.handleThunk}>thunk</button>
                <button onClick={this.handlePromise}>promise</button>
                <button onClick={this.handleSaga}>handleSaga</button>
                <button onClick={()=>store.dispatch({type:'ADD_PRICE'})}>store.dispatch</button>
                <button onClick={this.props.ADD_PRICE}>mapDispatch</button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state.app
}

function mapDispatchToProps(dispatch) {
    return {
        ADD_PRICE: () => dispatch({ type: "ADD_PRICE" }),
        dispatch
    }
}

function add() {
    return {
        type: 'ADD_PRICE'
    }
}
function sub() {
    return {
        type: 'ADD_PRICE'
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ add, sub }, dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(reduxMid);