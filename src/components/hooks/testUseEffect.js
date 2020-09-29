/**
 * useEffect每次更新都是独立的
 */
import React from 'react'
function index2 (){
    let [count,setCount] = React.useState(0)
    let countRef = React.useRef(0)
    let count2 = 0
    React.useEffect(()=>{
        setTimeout(() => {
                console.log('countRef',countRef.current)
                console.log('count2',count2)
        }, 3000);
    },[count])
    const add = function(){
        setCount(count+1);
        countRef.current = count+1;
        count2 = count+1
    }
    return <div>
        <h3>{count}</h3>
        <button onClick={add}>加</button>
    </div>
}


// render后的log顺序 index->aftercount->prevcount
/**
 * 为防止内存泄漏，清除函数会在组件卸载前执行。 
 * 另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除
 * React 将在组件更新前刷新上一轮渲染的 effect
 * 注：卸载和每次render并不是一回事
 * 
 * React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它!!!
 * 它在第一次渲染之后和每次更新之后都会执行 类似于componentDidUpdated 和 compontDidMounted 的结合
 */
function index() {
    const [count, setCount] = React.useState(0)
    console.log('index ', count)
    React.useEffect(() => {
        console.log('prevcount', count)
        return () => {
            console.log('aftercount', count)
        }
    }, [count])
    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>add</button>
    </div>
}


export default index
