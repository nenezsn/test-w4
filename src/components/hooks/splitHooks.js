import React, { useState, useCallback } from 'react'
function Num() {
    const [count, setCount] = useState(0)
    const add = useCallback(() => {
        setCount(count + 1)
    })
    const log = useCallback(() => {
        alert(count)
    })
    return [log, add]
}
export default Num