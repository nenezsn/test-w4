import React from 'react';
function Index() {
    const [count,setCount] = React.useState(0)
    // const [count,setCount] = React.useState(()=>{
    //     // 惰性初始 state
    //     // initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
    //     console.log('init')
    //     return 0
    // })
    function add(){
        setCount(count+1)
        // 如果state是对象  setCount不会自动合并 需要手动合并
        // setCount(prevCount=>{
        //     return prevCount+1
        // })
    }
    return <div>
        <p>count:{count}</p>
        <button onClick={add}>加</button>
    </div>
}


export default Index