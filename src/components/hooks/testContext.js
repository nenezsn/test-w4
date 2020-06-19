/**
 * @description React hooks useContext
 */

import React, { useContext,useState } from 'react'
import Context from './context'

function Father() {
    const [count,setcount] = useState(0)
    return <Context.Provider value={{ content: count }}>
        <Son></Son>
        <button onClick={()=>{setcount(count+1)}}>加</button>
    </Context.Provider>
}
function Son() {
    const contextvalue = useContext(Context)
    return <div>
        {contextvalue.content}
    </div>
}
export default Father