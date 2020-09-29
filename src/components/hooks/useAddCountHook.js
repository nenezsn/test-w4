import React, { useState, useCallback } from 'react'
function useAddCountHook(initCount) {
    const [count, setCount] = useState(initCount)
    const add = useCallback(() => {
        setCount(count + 1)
    })
    return [count, add]
}
export default useAddCountHook