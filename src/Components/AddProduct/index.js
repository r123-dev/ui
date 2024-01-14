import React,{useState,useEffect} from 'react';
import InputComponent from '../InputComponent';
import './style.css';
import Button from '../ButtonType2';
import { useDispatch } from 'react-redux';
// import { addProduct,editProduct } from '../../reducer/product';
import { Addproduct,editProduct } from '../../action';
import { CancelOutlined } from '@material-ui/icons';
function AddProduct({ setIsAddProduct,data={},edit=false}) {
    const dispatch=useDispatch()
    const [formData,setFormData]=useState({
        name:"",
        price:"",
        img:"",
        description:""

    })
    useEffect(()=>{
        if(edit)
        {
            setFormData({
                name:data?.title,
                price:data?.price,
                img:data?.img,
                description:data?.description

            })
        }

    },[])
   
        
   
   
    const handleOnChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        

    }
    const handleAddProduct=()=>{
        const {name,price,img}=formData;
        let dt={title:name,price,img};
        if(edit)
        {
            dt.id=data?.id;
            dispatch(editProduct(dt));
        }
       else{
        dt.className="home_animation1";
       
        dispatch(Addproduct(dt));
       }
       setIsAddProduct(false);


    }
  return (
    <div className='modalWrapper'>
        <div className='modalContainer'>
            <div className='headerContainer'>
        <h2 style={{textAlign:"center"}}>Add Product</h2>
        <div onClick={()=>setIsAddProduct(false)} className='icon'>
        <CancelOutlined/>
        </div>
        </div>
        <div className='formContainer'>
        <InputComponent
        label="Product title"
        type="text"
        placeholder="Enter Product Title"
        value={formData?.name}
        name="name"
        handleOnChange={handleOnChange}
        

        />
        
        <InputComponent
        label="Price"
        type="number"
        placeholder="Enter Price"
        value={formData.price}
        name="price"
        width="100%"
        handleOnChange={handleOnChange}

        

        />
        <InputComponent
        label="Image Link"
        
        placeholder="Paste an image link"
        value={formData.img}
        name="img"
        width="100%"
        handleOnChange={handleOnChange}
        

        />
        
        {/* <InputComponent
        label="product Discription"
        
        placeholder="write about Product"
        value={formData.description}
        name="description"
        handleOnChange={handleOnChange}


        /> */}
        <div className='btnGroup'>
            <Button handleClick={()=>handleAddProduct() }text={edit?"Edit":"ADD"}/>
            <Button handleClick={()=> setIsAddProduct(false)} color="black" bgColor="#fff"text="Cancel"/>
        </div>

        </div>
        </div>
      
    </div>
  )
}

export default AddProduct
