import React, { useState, useEffect, useRef, useReducer, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import memo from 'memoize-one' //和 usememo 很相似
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

const setObj = new Set()
// function组件需要放在外面   和usememo一个效果
const getFullname =memo((firstname,secondname)=>{
    console.log('firstname')
    return firstname+':'+secondname
})
function AutoCount(props) {
    const [firstname,setFirstname] = useState('张')
    const [secondname,setSecondname] = useState('三')
    const [count, setcount] = useState(() => 1)
    // HOOKS reducers
    const [count2, dispatch] = useReducer(countReducer, 0)
    // redux reducers
    const app = useSelector(state => state.app)
    const dispatch2 = useDispatch()
    const divref = useRef();
    const countRef = useRef()

    //capture 问题
    // useEffect(()=>{
    //   let timer =   setInterval(()=>{
    //       console.log('count',countRef.current)
    //   },5000)
    //   return ()=>{
    //       clearInterval(timer)
    //   }
    // },[])

    useEffect(() => {
        console.log('divref.current', divref.current)
    }, [])

    const sum = useMemo(()=>{
        return count + count2
    },[count,count2])

    const handleClick = useCallback(() => {
        console.log('son click', count2)
    },[])
    //与上个方法等效
    // const handleClick = useMemo(()=>()=>{
    //     console.log('son click')
    // },[])

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


    return <frameElement>
        <h2>求和：{sum}</h2>
        <h3>
            数量：{count}
        <button onClick={() => { setcount(count + 1);countRef.current = count+1 }}>加{count}</button>
        </h3>
        {/* hook redux */}
        <h3>数量1：{count2}
            <button onClick={() => { dispatch({ type: "ADD" }); }}>加</button>
            <button onClick={() => { dispatch({ type: "SUB" }) }}>减</button>
        </h3>
        {/* redux */}
        <h3>价格：{app.price}
            <button onClick={add}>加</button>
            <button onClick={sub}>减</button>
        </h3>
        <div id='wangbing' ref={divref}>222</div>
        <h3>名字：{getFullname(firstname,secondname)}
            <button onClick={()=>{setFirstname('王')}}>改</button>
        </h3>
        {/* <Son handleClick={handleClick} /> */}
    </frameElement>
}

class Son extends React.Component {
    state={
        firstname:'张',
        secondname:'三'
    }
    getFullname =memo((firstname,secondname)=>{
        console.log('firstname')
        return firstname+':'+secondname
    })
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                firstname:'王冰'
            })
        }, 3000);
    }
    render() {
        console.log('son render ')
    return <div onClick={this.props.handleClick}>son component {this.getFullname(this.state.firstname,this.state.secondname)}</div>
    }
}

// const Son = React.memo((props)=>{
//         console.log('son render ')
//     return <div onClick={props.handleClick}>son component</div>
// })
// const Son = (props)=>{
//     console.log('son render ')
// return <div onClick={props.handleClick}>son component</div>
// }


export default AutoCount