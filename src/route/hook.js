import React, { Component } from 'react';
import TestContext from '../components/hooks/testContext'
import TestReducer from '../components/hooks/testReducer'
import TestuseMemo from '../components/hooks/testuseMemo'
import TestuseRef from '../components/hooks/testuseRef'
import SplitHooks from '../components/hooks/testSplitHook'
import TestUseEffect from '../components/hooks/testUseEffect'
import TestUseState from '../components/hooks/testuseState'

function hook() {
    return (
        <div>
            <h3>hooks</h3>
            {/* <TestContext/> */}
            <TestReducer/>
            {/* <TestuseMemo/> */}
            {/* <TestuseRef/> */}
            {/* <TestUseEffect/> */}
            {/* <SplitHooks/> */}
            {/* <TestUseState/> */}
        </div>
    );
}


export default hook;