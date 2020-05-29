import React, { useCallback } from 'react';
import ReactDom from "react-dom";
import { Provider, connect, useDispatch, useSelector } from 'react-redux'
import store from './store/store'
import "./index.css";
import styles from "./index.less";
import Img from "./images/logo.jpg";
import { Button } from 'antd'
import { add } from "@util";//这种方式不能连接到源地址
import Auto from './components/count'


class Index extends React.Component {
    state = {
        num: 0,
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
    componentDidMount() {
        document.getElementById('state').addEventListener('click', () => {
            this.setState({
                num: this.state.num + 1
            })
            console.log(this.state.num)
            this.setState({
                num: this.state.num + 1
            })
            console.log(this.state.num)
        })
        console.warn('在非react事件系统中，setState才会是同步的，例如addEventListener和setTimeout')
    }
    render() {
        const sum = add(1, 3)
        return <div className={styles.red}>
            <img src={Img} className='logo' />
            <Button onClick={this.getInfo}>hello webpack111{sum}</Button>
            <div className={styles.name}>{this.state.name}</div>
            <div>{this.state.age}</div>
            <button id='state'>测试setState</button>
            <Auto name='wb' />
        </div>
    }
}
ReactDom.render(<Provider store={store}>
    <Index />
</Provider>, document.getElementById('root'))

