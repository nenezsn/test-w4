import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
import "./index.leitss";
import Img from "./images/logo.jpg";
import { Button } from 'antd'
import { add } from "./util";

class Index extends React.Component {
    state = {
        name: '',
        age: ''
    }
    getInfo = () => {
        window.fetch('/api/getinfo', {
            method: "POST",
            body: "name=wangbing"
        }).then(data => data.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    age: data.age
                })
            })

    }
    render() {
        const sum = add(1, 3)
        return <div className='red'>
            <img src={Img} className='logo' />
            <Button onClick={this.getInfo}>hello webpack111{sum}</Button>
            <div className='name'>{this.state.name}</div>
            <div>{this.state.age}</div>
        </div>
    }
}
ReactDom.render(<Index />, document.getElementById('root'))