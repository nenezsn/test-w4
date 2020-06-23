import React, { Component } from 'react';
import TestContext from '../components/hooks/testContext'
import TestReducer from '../components/hooks/testReducer'
import TestuseMemo from '../components/hooks/testuseMemo'
import TestuseRef from '../components/hooks/testuseRef'
import splitHooks from '../components/hooks/splitHooks'
class hook extends Component {
    render() {
        return (
            <div>
                <h3>hooks</h3>
                {/* <TestContext/>
                <TestReducer/>
                <TestuseMemo/>
                <TestuseRef/> */}
            </div>
        );
    }
}
// 抽离hooks测试
// function hook(){
//    const [log,add] =  splitHooks()
//    return <div>
//        <button onClick={add}>加</button>
//        <button onClick={log}>打印</button>
//    </div>
// }

export default hook;