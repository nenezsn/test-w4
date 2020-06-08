import React, { Component } from 'react';

class test extends Component {
    getLazy=()=>{
        import('../util/index').then(data=>{
            console.log('data',data.default)
        })
    }
    getLazy2=()=>{
        require.ensure([],require=>{
           const data =  require('../util/util')
           console.log('data',data)
        },'util')
    }
    render() {
        return (
            <div>
                <button onClick={this.getLazy}>import懒加载</button>
                <button onClick={this.getLazy2}>require.ensure懒加载</button>
            </div>
        );
    }
}

export default test;