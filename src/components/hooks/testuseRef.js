/**
 * @description useRef处理capture value 问题  和 获取dom节点
 * useRef 会在每次渲染时返回同一个 ref 对象
 */
import React,{useState,useRef, useEffect, useCallback} from 'react';

function Index (){
    const [count,setCount] = useState(0)
    const countRef = useRef(count)
    const inputRef = useRef()
    const sonRef = useRef()
    // 存在缓存问题 不能读到最新的count
    // useEffect(()=>{
    //     const timer = setInterval(() => {
    //         console.log('2222',count)
    //     }, 3000)
    //     return ()=>{
    //         clearInterval(timer)
    //     }
    // },[])
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log(countRef.current)
        }, 3000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    // 如果不写count以来 每次count值都是初始值
    const handleClick=useCallback(()=>{
        setCount(count+1)
        countRef.current +=1
    },[count]) 
    const handleValue = useCallback(()=>{
        alert(inputRef.current.value)
    },[])
    return <div>
        <h3>{count}</h3>
        <button onClick={handleClick}>增加</button>
        <input ref={inputRef}/><button onClick={handleValue}>打印</button>
        <button onClick={()=>sonRef.current.handleClick()}>出发子组件实例</button>>
        <Son ref={sonRef}/>
    </div>
}

class Son extends React.Component{
    handleClick=()=>{
        alert('this is son event')
    }
    render(){
        return <div>son component</div>
    }
}

/**
 * ref的作用 可以对比 countRef和count2的不同效果；
 * 可以理解成 countRef”跨渲染周期”保存数据  count2则会因为每次初始化而重新赋值
 */
function hook2 (){
    let [count,setCount] = React.useState(0)
    let countRef = React.useRef(count)
    let count2 = 0
    React.useEffect(()=>{
        setTimeout(() => {
                console.log('countRef',countRef.current)
                console.log('count2',count2)
        }, 1000);
    },[count])
    return <div>
        <h3>{count}</h3>
        <button onClick={()=>{setCount(count+1);countRef.current = count+1;count2 = count+1}}>加</button>
    </div>
}

export default hook2