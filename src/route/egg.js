import React, { Component } from 'react';
import request from '../util/request'
import { Input,message } from 'antd'

class Egg extends Component {
    state = {
        search: '',
        name: '',
        age: ''
    }
    getUserInfo = async () => {
        const data = await request('/get.user.info', { name: this.state.search })
        if(data.code != 200){
            message.error(data.msg)
            return 
        }
        this.setState({
            name: data.name,
            age: data.age
        })
    }
    changeName = e => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}:{this.state.age}</p>
                <Input onChange={this.changeName} />
                <button onClick={this.getUserInfo}>获取个人信息</button>
            </div>
        );
    }
}

export default Egg;