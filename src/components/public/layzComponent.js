/**
 * @description 懒加载
 */
import React, { Component } from 'react';

// 高阶组件 接受一个函数 
export default function (loadComfn) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.load(props)
            this.state = {
                Com: null
            }
        }
        // load(props){
        //     loadComfn().then(Com=>{
        //         this.setState({
        //             Com:Com.default?Com.default : null
        //         })
        //     })
        // }
        load = async (props) => {
            const Com = await loadComfn()
            this.setState({
                Com: Com.default ? Com.default : null
            })
        }
        render() {
            const Com = this.state.Com
            return Com ? <Com /> : null
        }
    }
};