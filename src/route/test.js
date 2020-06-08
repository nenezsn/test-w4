import React, { Component,Suspense } from 'react';
const LazyComponent = React.lazy(()=>import('../components/public/pdf'))

class test extends Component {
    state={
        show:false
    }
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
    getLazy3=()=>{
        this.setState({
            show:true
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getLazy}>import懒加载</button>
                <button onClick={this.getLazy2}>require.ensure懒加载</button>
                <button onClick={this.getLazy3}>React.Lazy懒加载</button>
                {this.state.show ? 
                <Suspense fallback={<div>loading</div>}>
                    <LazyComponent/>
                </Suspense>
                : null }
            </div>
        );
    }
}

export default test;