/**
 * useEffect每次更新都是独立的
 */
import React from 'react'
function index (){
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
// function Index() {
//     const [count, setCount] = React.useState(0)
//     console.log('index ', count)
//     useEffect(() => {
//         console.log('prevcount', count)
//         return () => {
//             console.log('aftercount', count)
//         }
//     }, [count])

//     return <div>
//         <h3>{count}</h3>
//         <button onClick={() => setCount(count + 1)}>add</button>
//     </div>
// }


export default index
