import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
import styles from  "./index.less";
import Img from "./images/logo.jpg";
import { Button } from 'antd'
import { add } from "@util";//这种方式不能连接到源地址

class Index extends React.Component {
    state = {
        name: '',
        age: ''
    }
    getInfo = async () => {
        let data = await window.fetch('/api/getinfo', {
            method: "POST",
            body: "name=wangbing"
        })
        data = await data.json()
        this.setState({
            name: data.name,
            age: data.age
        })

    }
    render() {
        const sum = add(1, 3)
        return <div className={styles.red}>
            <img src={Img} className='logo' />
            <Button onClick={this.getInfo}>hello webpack111{sum}</Button>
            <div className={styles.name}>{this.state.name}</div>
            <div>{this.state.age}</div>
        </div>
    }
}
ReactDom.render(<Index />, document.getElementById('root'))