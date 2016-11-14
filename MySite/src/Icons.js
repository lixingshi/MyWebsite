import React, { Component } from 'react';
import './App.css';

function SetIcon(props){
  return (
    <img style={{width:"50px",position:"absolute",top:props.top,left:props.left,
      animation: "shine " + props.shine +" linear infinite alternate,float 6s ease-in-out infinite alternate"
    }} src={props.src}/>
  
  );
}

class Icons extends Component{
  
  render() {
    var items = [];
    this.props.icons.map((icon)=>{
       items.push( <SetIcon src={icon.src} top={Math.random()*40+"vh"} left={Math.random()*95+"vw"} shine={3+Math.floor(2)+"s"}/>)
      });
    return (
      <div>{items}</div>
    );
  }
}

export default Icons;