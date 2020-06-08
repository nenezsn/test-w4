import React, { Component } from 'react';
import TestContext from '../components/hooks/testContext'
import TestReducer from '../components/hooks/testReducer'
import TestuseMemo from '../components/hooks/testuseMemo'
import TestuseRef from '../components/hooks/testuseRef'

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

export default hook;