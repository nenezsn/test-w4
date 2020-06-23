import React from 'react';
import { connect } from 'react-redux'
class Index extends React.Component {
    render() {
        return <div>
            <Child/>
        </div>
    }
}

class Child extends React.Component{
    render(){
        return <div>Child</div>
    }
}

export default Index