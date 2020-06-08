import React, { Component } from 'react';

class test extends Component {
    getLazy=()=>{
        import('../util/index').then(data=>{
            console.log('data',data.default)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getLazy}>懒加载</button>
            </div>
        );
    }
}

export default test;