/**
 * @description 对比hooks reducers和redux reducers
 */

import React, { Fragment, useReducer, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function countReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'SUB':
            return state - 1
        default:
            return 0
    }
}

function Index(props) {
    // HOOKS reducers
    const [count, dispatch] = useReducer(countReducer, 0)
    // redux reducers
    const app = useSelector(state => state.app)
    const dispatch2 = useDispatch()

    const add = useCallback(() => {
        dispatch2({
            type: 'ADD_PRICE'
        })
    }, [])
    /**
     * 当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（
     * 例如 shouldComponentUpdate）的子组件时，它将非常有用。
     * useCallback 不要滥用，针对高开销情况使用
     */
    function sub (){
        dispatch2({
            type: 'SUB_PRICE'
        })
    }

    return <Fragment>
        {/* hook redux */}
        <h3>数量1：{count}
            <button onClick={() => { dispatch({ type: "ADD" }) }}>加</button>
            <button onClick={() => { dispatch({ type: "SUB" }) }}>减</button>
            <Son dispatch={dispatch}/>
        </h3>
        {/* redux */}
        <h3>价格：{app.price}
            <button onClick={add}>加</button>
            <button onClick={sub}>减</button>
        </h3>
    </Fragment>
}

function Son({dispatch}){
    return <button onClick={()=>dispatch({type:'ADD'})}>子组件</button>
}


export default Index