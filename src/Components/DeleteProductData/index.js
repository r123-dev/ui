import React from 'react';
import './style.css';
// import Button from '../Utility/Button';
import Button from '../ButtonType2';
import { useDispatch } from 'react-redux';
// import { deleteProduct } from '../../reducer/product';
import { DeleteProduct } from '../../action';

function DeleteProductData({setIsDeleteModal,id}) {
    const dispatch=useDispatch();
    const handleRemoveProduct=()=>{
        dispatch(DeleteProduct(id));
        setIsDeleteModal(false);
      }
  return (
    <div  className='modalWrapper'>
        <div style={{minWidth:"50px",width:"350px",minHeight:"150px"}} className='deleteContainer modalContainer'>
            <h2 className='deleteHeading'>Are you Sure You Want to Delete It?</h2>
            <div className='BtnGroup'>
                <Button handleClick={()=>handleRemoveProduct()} text="Yes"/>
                <Button handleClick={()=>setIsDeleteModal(false)} color="black" bgColor="#fff" text="Cancel"/>
            </div>
      </div>
    </div>
  )
}

export default DeleteProductData;
