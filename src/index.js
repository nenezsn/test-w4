import React from 'react';
import ReactDom from "react-dom";
import "./index.css";
import Img from "./images/logo.jpg";

class Index extends React.Component{
    render(){
        return <div className='red'>
            <img src={Img} className='logo'/>
            hello webpack111
            </div>
    }
}
ReactDom.render(<Index/>,document.getElementById('root'))