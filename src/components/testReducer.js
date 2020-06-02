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
    const [count2, dispatch] = useReducer(countReducer, 0)
    // redux reducers
    const app = useSelector(state => state.app)
    const dispatch2 = useDispatch()

    const add = useCallback(() => {
        dispatch2({
            type: 'ADD_PRICE'
        })
    }, [])
    const sub = useCallback(() => {
        dispatch2({
            type: 'SUB_PRICE'
        })
    }, [])

    return <Fragment>
        {/* hook redux */}
        <h3>数量1：{count}
            <button onClick={() => { dispatch({ type: "ADD" }) }}>加</button>
            <button onClick={() => { dispatch({ type: "SUB" }) }}>减</button>
        </h3>
        {/* redux */}
        <h3>价格：{app.price}
            <button onClick={add}>加</button>
            <button onClick={sub}>减</button>
        </h3>
    </Fragment>
}


export default Index