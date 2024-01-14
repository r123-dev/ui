export const AddToCart = (arg) => {
  return {
    type: "ADD_TO_CART",
    payload: arg,
  };
};

export const Addproduct=(arg)=>{
  return{
    type:"ADD_PRODUCT",
    payload:arg
  }
}
export const editProduct=(arg)=>{
  return{
    type:"EDIT_PRODUCT",
    payload:arg
  }
}
export const DeleteProduct=(arg)=>{
  return{
    type:"DELETE_PRODUCT",
    payload:arg
  }
}
export const DeleteFromCart = (arg) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: arg,
  };
};
export const Delete = (arg) => {
  return {
    type: "REMO_FROM_CART",
    payload: arg,
  };
};

export const User = (arg) => {
  return {
    type: "user",
    payload: arg,
  };
};
export const set = (arg) => {
  return {
    type: "NULL",
    payload: arg,
  };
};
