import React from 'react';
import './button.css';

function Button({quantity,onIncrement,onDecrement}) {
  return (
    <div className='btn-flex'>
        <button onClick={()=>onDecrement()} className='btn-flexItem deccrement'>-</button>
        <div>{quantity}</div>
        <button onClick={()=>onIncrement()} className='btn-flexItem increment'>+</button>
      
    </div>
  )
}

export default Button
