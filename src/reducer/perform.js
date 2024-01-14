const initialState = {

  products:[
           { className:"home_animation1",
            id:"1",
            title:'HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 39.62 cms (15.6") FHD Screen, Windows 10, MS Office (15s-gr0011AU)'
            ,price:"35000",
            img:"https://m.media-amazon.com/images/I/41mQtYQUzmL._AC_UY327_FMwebp_QL65_.jpg",
}
,
          
           { className:"home_animation1",
            id:"2",
            title:"Pigeon by Stovekraft Basics Aluminium Non-stick Cookware Set, Set of 3 (With one lid), Pink",
            price:"2500",
            img:"https://m.media-amazon.com/images/I/61JlllBcGpL._AC_UL480_FMwebp_QL65_.jpg",
},

          
           { className:"home_animation1",
            id:"3",
            title:"boAt Airdopes 281 Bluetooth Truly Wireless Earbuds with Mic(Active Black)",
            price:"1500",
            img:"https://m.media-amazon.com/images/I/61U4ZnmUl2L._AC_UY327_FMwebp_QL65_.jpg"
           },

          
           { className:"home_animation1 ,home_animationmd2",
            id:"4",
            title:"Mi 11X Pro 5G (Lunar White, 8GB RAM, 128GB Storage) | Snapdragon 888 | 108MP Camera",
            price:"18500",
            img:"https://images-eu.ssl-images-amazon.com/images/I/41qJxT0iJSS._AC_SX184_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd2",
            id:"5",
            title:"Amazon Brand - Solimo Lily Bloom 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green",
            price:"3000",
            img:"https://m.media-amazon.com/images/I/51RDqstL6kL.jpg",
},

          
           { className:"home_animation1 ,home_animationmd2",
            id:"6",
            title:"Bildos Cotton & Khadi Cotton Reusable Super Breathable Fabric Face mask with Adjustable Ear Loop (Pack of 12)",
            price:"300",
            img:"https://m.media-amazon.com/images/I/9131tSnEdaS._AC_UL480_FMwebp_QL65_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd3",
            id:"7",
            title:"Afflatus Men's Slim Fit Cotton Casual Shirt",
            price:"600",
            img:"https://m.media-amazon.com/images/I/41+nsVPmsYL._AC_UL480_FMwebp_QL65_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd3",
            id:"8",
            title:"Men's Century-12 Running,Walking,Sports Shoes",
            price:"1500",
            img:"https://m.media-amazon.com/images/I/71LVvI-gCUS._AC_UL480_FMwebp_QL65_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd3",
            id:"9",
            title:"KUBA Smart Band ID115C Fitness Tracker Watch with Heart Rate, Activity Tracker Water Resistant Body Functions Like Steps Counter, Calorie Counter, (Men and Women)"
            ,price:"999",
            img:"https://m.media-amazon.com/images/I/61lecqJdPOS._AC_SR180,120_QL70_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd4",
            id:"10",
            title:"Lifelong PVC Home Gym Set 10-20kg Plate 3feet curl Rod and Dumbbells rods with Gym Accessories",
            price:"8999",
            img:"https://m.media-amazon.com/images/I/91Yoh5TKI8L._AC_UL480_FMwebp_QL65_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd4",
            id:"11",
            title:"SAVYA HOME® APEX Chairs Delta MB Chair Umbrella Base Office Chair (Standard, Black)",
            price:"4000",
            img:"https://m.media-amazon.com/images/I/71Euoz3js9S._AC_UL480_FMwebp_QL65_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd4",
            id:"12",
            title:"iFFALCON 103 cm (40 inches) Full HD Android Smart LED TV 40F2A (Black) (2021 Model) | With Built-in Voice Assistant",
            price:"25000",
            img:"https://m.media-amazon.com/images/I/81cMqXIzWtS._AC_SR180,120_QL70_.jpg"
},

          
           { className:"home_animation1 ,home_animationmd5",
            id:"13",
            title:"Story@Home Cotton Bath and Hand Towel 450 GSM (Set of 6, Navy Blue, Lime)",
            price:"800",
            img:"https://m.media-amazon.com/images/I/81SZQgWotpL._AC_UL480_FMwebp_QL65_.jpg"
},

          
           { className:"home_animation1 home_animationmd5",
            id:"14",
            title:"LEKZED HEAVY DUTY PROFESSIONAL ELECTRIC HAIR CLIPPER NP Runtime: 0 Trimmer for Men & Women (Multicolor) Hair Trimmer"
            ,price:"800",
            img:"https://m.media-amazon.com/images/I/412JFRgulLL._AC_UL480_FMwebp_QL65_.jpg"
}
,
          
           { className:"home_animation1",
            id:"15",
            title:"Tread Mall Portable Laptop Bed Tray Table with Foldable Legs, Foldable Lap Desk for Eating, Working, Writing, Gaming, Drawing on Bed/Couch/Sofa/Floor…"
            ,price:"6000",
            img:"https://m.media-amazon.com/images/I/51ZTlYhF7YS._AC_UY327_FMwebp_QL65_.jpg"
},

          
          
],
cart:{},

totalItems:0

};

export const Reducer =(state = initialState, action) => {
  console.log(action);
  if (action.type === "ADD_TO_CART") {
    if(state.cart[action.payload.id])
    {
      return{...state, totalItems:state.totalItems+1,cart:{...state.cart,[action.payload.id]:{...state.cart[action.payload.id],quantity:state.cart[action.payload.id]?.quantity+1}}};
    }
    
    return {...state,totalItems:state.totalItems+1, cart:{...state.cart,[action.payload.id]:{...action.payload,quantity:1}}};

  } else if (action.type ==="REMOVE_FROM_CART") {
    let temp=state;
   

    if(state.cart[action.payload])
    {
      temp.cart[action.payload].quantity=temp.cart[action.payload].quantity-1;
      if(temp.cart[action.payload].quantity<=0)
      {
        delete temp.cart[action.payload];
        
      }
      temp.totalItems--;

      return {...temp};
      
    }
    
      return {...state};
    

    
  } 
  else if(action.type==="ADD_PRODUCT")
  {
    console.log(action);
    return{...state,products:[...state.products,{...action.payload,id:state.products.length+1}]}
  }

  else if(action.type==="EDIT_PRODUCT")
  {
    console.log(action);
   return{...state,products:[...state.products.map(item=>item.id!==action.payload.id?item:{...action.payload,className:item.className})]} 
  }
  else if(action.type==="DELETE_PRODUCT")
  {
    return {...state,products:[...state.products.filter(item=>item.id!==action.payload)]}
  
  }
  else {
    return state;
  }
};
