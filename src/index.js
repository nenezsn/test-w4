import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
import Img from "./images/logo.jpg";
import { Button } from 'antd'

class Index extends React.Component{
    render(){
        return <div className='red'>
            <img src={Img} className='logo'/>
            <Button>hello webpack111</Button>
            </div>
    }
}
ReactDom.render(<Index/>,document.getElementById('root'))