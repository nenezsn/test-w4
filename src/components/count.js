import React, { useState, useEffect, useRef, useReducer,useCallback,useMemo } from 'react'

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


function AutoCount(props) {
    const [count, setcount] = useState(() => 1)
    const [count2, dispatch] = useReducer(countReducer,0)
    const divref = useRef();
    useEffect(() => {
        console.log('count', count)
        return () => {
            console.log('count', count)
        }
    }, [count])
    useEffect(() => {
        console.log('divref.current', divref.current)
    }, [])


    const handleClick = useCallback(()=>{
        console.log('son click',count2)
    },[])
    //与上个方法等效
    // const handleClick = useMemo(()=>()=>{
    //     console.log('son click')
    // },[])

    return <frameElement>
        <button onClick={() => { setcount(count + 1) }}>加{count}</button>
        <button onClick={() => { dispatch({ type: "ADD" }) }}>加{count2}</button>
        <button onClick={() => { dispatch({ type: "SUB" }) }}>减{count2}</button>
        <div id='wangbing' ref={divref}>222</div>
        <Son handleClick={handleClick}/>
    </frameElement>
}

class Son extends React.PureComponent{
    render(){
        console.log('son render ')
        return <div onClick={this.props.handleClick}>son component</div>
    }
}

export default AutoCount