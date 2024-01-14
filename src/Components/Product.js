import React,{useState} from "react";
import "../Css/Product.css";
import { useDispatch } from "react-redux";
import { AddToCart,DeleteFromCart,DeleteProduct } from "../action/index";
import { useSelector } from "react-redux";
import Button from "./Button/Button";
import { EditOutlined } from "@material-ui/icons";
import { DeleteOutline } from "@material-ui/icons";
import AddProduct from "./AddProduct";
import DeleteProductData from "./DeleteProductData";
export default function Product(props) {
  const dispatch = useDispatch();
  const [isDeleteModal,setIsDeleteModal]=React.useState(false);
  

  const { id, title, price, img,quantity } = props;
  let cname = props.className;
  cname = cname + " " + "product";
  const [isEdit,setIsEdit]=useState(false);

  
  const onIncrement=()=>{
    dispatch(AddToCart({ id, title, price, img }))
  }
  const onDecrement=()=>{
    dispatch(DeleteFromCart(id))

  }
  const deleteProduct=()=>{
    // console.log("heelo
    setIsDeleteModal(true);
    
  }
  return (
    <>
    <div className={cname}>
      <div className="product_info">
        {/* <div className="triangle"></div> */}
        <p style={{ fontSize: "0.9rem", fontWeight: "500", margin: "2px" }}>
          {props.title}
        </p>
        <p className="product_price">
          <small>₹ </small>
          <strong style={{ fontSize: "20px", fontWeight: "600" }}>
            {props.price}
          </strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
        <div className="img-container">
          <div>
            <img src={props.img} alt="laptop pic" />
          </div>
        </div>

        <div className="addtobasket">
          {quantity>0?<Button quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement}/>: <button onClick={onIncrement}>Add to Basket</button>}
         
        </div>
        <div className="featureBtn">
            <div   className='edit'>
              <EditOutlined onClick={()=>{setIsEdit(true)}} style={{color:"blue"}}/>
              </div>
            <div className='del'>
              <DeleteOutline onClick={()=>{deleteProduct()}} style={{color:"red"}}/>
              
                </div>
          </div>
      </div>
      
    </div>
    {isEdit&&<AddProduct setIsAddProduct={setIsEdit} edit={true} data={props}/>}
    {isDeleteModal&&<DeleteProductData id={id} setIsDeleteModal={setIsDeleteModal}/>}
    </>
  );
}
