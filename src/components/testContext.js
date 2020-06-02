/**
 * @description React hooks useContext
 */

import React, { useContext } from 'react'
import Context from './context'

function Father() {
    return <Context.Provider value={{ content: 'this is Reactv16 context' }}>
        <Son></Son>
    </Context.Provider>
}
function Son() {
    const contextvalue = useContext(Context)
    return <div>
        {contextvalue.value}
    </div>
}
export default Father