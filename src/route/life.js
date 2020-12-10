import React, { Component } from 'react';


class Child extends Component {
    state = {
        count: 0
    }
    // getSnapshotBeforeUpdate() {

    // }
    // setState的更新 会导致执行两边，值为props的  不入componentReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState)
        if(nextProps.count != prevState.count){
            return {
                count: nextProps.count
            }
        }
        return null
      
    }
    // componentWillReceiveProps(a) {
    //     console.log('componentWillReceiveProps', this.props)
    // }
    // shouldComponentUpdate(a, b) {
    //     console.log('shouldComponentUpdate', a, b)
    //     if (a.count != this.props.count) {
    //         return true
    //     }
    //     return false
    // }
    render() {
        console.log('child render', this.state.count)
        return <div>
            <p>{this.state.count}</p>
            <button onClick={()=>this.setState({count:this.state.count+1})}>加</button>
        </div>
    }
}

class index extends Component {
    state = {
        count: 0,
        count2: 0
    }
    render() {
        return (
            <div>
                <Child count={this.state.count} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>增加count</button>
                <button onClick={() => this.setState({ count2: this.state.count2 + 1 })}>增加count2</button>
            </div>
        );
    }
}

export default index;