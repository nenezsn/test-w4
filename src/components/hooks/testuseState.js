import React from 'react';
function Index() {
    const [count, setCount] = React.useState(0)
    const [info, setInfo] = React.useState({ name: 'wangbing', age: 23 })
    // const [count,setCount] = React.useState(()=>{
    //     // 惰性初始 state
    //     // initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略
    //     console.log('init')
    //     return 0
    // })
    function add() {
        setCount(count + 1)
        // setCount(count+1) //不生效，count依旧是旧值
        // 可以使用此方法，拿到最新更新后的count，但是如果state是对象  setCount不会自动合并 需要手动合并
        // 建议使用react.useEffect来监听count的变化，进行之后的操作
        // setCount(prevCount=>{
        //     return prevCount+1
        // })
    }
    function fix() {
        setInfo(prevInfo => {
            prevInfo.name = '张三'
            // return prevInfo
            return {...prevInfo} //必须返回新对象才能render
        })
    }
    return <div>
        <p>count:{count}</p>
        <p>name:{info.name}</p>
        <p>age:{info.age}</p>
        <button onClick={add}>加</button>
        <button onClick={fix}>修改</button>
    </div>
}


export default Index