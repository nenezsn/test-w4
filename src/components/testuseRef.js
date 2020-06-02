/**
 * @description useRef处理capture value 问题  和 获取dom节点
 */
import React,{useState,useRef, useEffect, useCallback} from 'react';

function Index (){
    const [count,setCount] = useState(0)
    const countRef = useRef(count)
    const inputRef = useRef()
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
    </div>
}
export default Index