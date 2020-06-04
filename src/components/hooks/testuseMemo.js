/**
 * @description useMemo 记忆函数 类似于vue的计算属性缓存机制
 */
import React, { useMemo, useState } from 'react'
import memo from 'memoize-one' //和 usememo 很相似

// function组件需要放在外面   和usememo一个效果 具有缓存结果的功效 类似于vue的计算属性
const getSum = memo((count1, count2) => {
    console.log('memoize-one reset compute')
    return count1 + ':' + count2
})
function Index() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // 用于测试
    const [flag, setFlag] = useState(false)

    const sum = useMemo(() => {
        console.log('useMemo reset compute')
        return count1 + count2
    },
        [count1, count2])

    return <div>
        <h3>
            数量：{sum}===== 数量：{getSum(count1, count2)}
            <button onClick={() => { setCount1(count1 + 1); }}>count1加</button>
            <button onClick={() => { setCount2(count2 + 1); }}>count2加</button>
        </h3>
        <button onClick={() => { setFlag(!flag) }}>引起render</button>
        <Son sum={sum} />
    </div>
}

// memo和pureComponent 功能一样  做了一层浅比较
const Son = React.memo(({ sum }) => {
    console.log('son render')
    return <div>子组件验证{sum}</div>
})

export default Index 