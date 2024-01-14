import React from 'react';
import './style.css'

function InputComponent(props) {
    const { label, type, placeholder, width, handleOnChange, value, name ,rows} = props;
  return (
    <div style={{width:width}} className='inputWrapper'>
      <label>{label}</label>
      <input autoComplete='off' type={type} rows={rows} placeholder={placeholder} onChange={handleOnChange} name={name} value={value}/>
    </div>
  )
}
InputComponent.defaultProps={
    width:"100%",
    value:"",
    placeholder:"",
    name:"",
    typr:"text",
    handleOnChange:()=>{},
    rows:1
}
export default InputComponent
