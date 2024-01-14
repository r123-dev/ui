import React from 'react';
import './style.css'

function index(props) {
  return (
    <button onClick={()=>props.handleClick()} style={{color:props.color,backgroundColor:props.bgColor,fontSize:props.fontSize}} className='btn'>
        {props.text}
    </button>
  )
}

export const ButtonType1=(props)=> {
    const {handleDelete,count,handleADD,disable=false}=props;
  return (
    <div className='adddecbtn'>
        <div  onClick={()=>{handleDelete()}}>-</div>
        <div >{count||0}</div>
        <div  onClick={()=>handleADD()}>+</div>
    </div>
  )
}

index.defaultProps={
    text:"",
    color:"#fff",
    bgColor:"#045680",
    fontSize:"1rem",
    handleClick:()=>{}
}
export default index

