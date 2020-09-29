import React from 'react';

class index extends React.Component {
    state = {
        count: 1
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        console.log('count', this.state.count)
        return <div>
            <button onClick={this.handleClick}>加</button>
        </div>
    }
}


export default index