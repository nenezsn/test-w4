/**
 * @description 懒加载
 */
import React, { Component } from 'react';

export default function (loading) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.load(props)
            this.state = {
                Com: null
            }
        }
        load(props){
            loading().then(Com=>{
                this.setState({
                    Com:Com.default?Com.default : null
                })
            })
        }
        render() {
            const Com = this.state.Com
            return Com ? <Com /> : null
        }
    }
};