import React, { Component } from 'react';


class Child extends Component {
    state={
        num:0
    }
    getSnapshotBeforeUpdate(){
        
    }
    static getDerivedStateFromProps(a,b){
        console.log('getDerivedStateFromProps', a, b)
        return {
            num:a.count
        }
    }
    componentWillReceiveProps(a) {
        console.log('componentWillReceiveProps', this.props)
    }
    shouldComponentUpdate(a, b) {
        console.log('shouldComponentUpdate', a, b)
        if(a.count != this.props.count){
            return true
        }
        return false
    }
    render() {
        console.log('child render',this.state.num)
        return <div>{this.props.count}</div>
    }
}

class index extends Component {
    state = {
        count: 0,
        count2:0
    }
    render() {
        return (
            <div>
                <Child count={this.state.count} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>增加</button>
        <button onClick={() => this.setState({ count2: this.state.count2 + 1 })}>增加{this.state.count2}</button>
            </div>
        );
    }
}

export default index;