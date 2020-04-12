import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
import Img from "./images/logo.jpg";
import { Button } from 'antd'
import { add } from "./util";

class Index extends React.Component{
    render(){
        const sum = add(1,3)
        return <div className='red'>
            <img src={Img} className='logo'/>
    <Button>hello webpack111{sum}</Button>
            </div>
    }
}
ReactDom.render(<Index/>,document.getElementById('root'))