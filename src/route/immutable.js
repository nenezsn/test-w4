/**
 * @description 
 * 组件优化的时候，子组件会做一层浅比较，这是父组件引用类型的state发生改变，但是引用地址不会变化，会导致子组件无法正常更新。
 * 但是子组件如果深层比较，也是比较浪费性能的。
 */

import { List,is } from 'immutable'
import React from 'react';

class Index extends React.Component {
    state = {
        list: [1, 2, 3],
        list2: List([1, 2, 3])
    }
    /**
        * 组件优化的时候，子组件会做一层浅比较（===），对于引用类型数据，地址不会变化，导致子组件无法正常更新。
        * 如果深层比较，缺很浪费性能的。
     */
    update = () => {
        let list = this.state.list
        list[1] = 10
        this.setState({
            list
        })
    }
    /**
     * immutable的方案就是保证数据不可变，每次更改数据都会生成新的引用地址。这样就会触发子组件的更新。
     * immutable的高深之处在于有节点共享的优势。
     * is可以对比两个List类型数据是否相等
     */
    update2 = () => {
        let list2 = this.state.list2
        this.setState({
            list2: list2.set(1, 10)
        })
    }
    render() {
        console.log('this', this.state)
        return <div>
            <Child list={this.state.list} />
            <button onClick={this.update}>add</button>
            <Child list={this.state.list2} />
            <button onClick={this.update2}>add2</button>
        </div>
    }
}
class Child extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.list != this.props.list
            || nextProps.list2 != this.props.list2) {
            return true
        }
        return false
    }
    render() {
        return <div>{this.props.list}</div>
    }
}
export default Index