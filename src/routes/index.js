import React from 'react'
import { add } from '../util'
import styles from './index.less'
import Img from '../images/logo.jpg'
import { Button } from 'antd'
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
            <Button onClick={this.getInfo}>111hello webpack111{sum}</Button>
            <div className={styles.name}>{this.state.name}</div>
            <div>{this.state.age}</div>
        </div>
    }
}
export default Index