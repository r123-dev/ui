import React, { useEffect, useState, useLayoutEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../Css/header.css";

import Logo from "../img/amazon.png";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector, useDispatch } from "react-redux";
import AddProduct from "./AddProduct";
function useWindowSixe() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  return size;
}

function Header() {
  const history = useHistory();
  const itemInCart = useSelector((state) => state.Reducer.totalItems);

  const [user, setUser] = useState(null);
  const [open,setOpen]=useState(false);
  const dsplay = useWindowSixe();
  const [userid, setUserid] = useState("");
  const [cls, setCls] = useState({});
  const [clsi, setClsi] = useState({});
  const [mobile, setMobile] = useState({
    display: "none",
  });

  const [cnt, setCnt] = useState(0);

  const signuser = async () => {
    try {
      if (user) {
        const data = await fetch("/logout", {
          method: "GET",

          credentials: "same-origin",
        });

        history.push("/");
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const change = () => {
    if (mobile.display === "none") {
      setMobile({ display: "block" });
    } else {
      setMobile({ display: "none" });
    }
  };

  
  
  useEffect(() => {
    if (dsplay < 500) {
      setCls({ display: "block" });
      setClsi({ display: "none",color:"#fff",cursor:"pointer" });
    } else {
      setMobile({ display: "none" });
      setCls({ display: "none" });
      setClsi({ display: "flex",color:"#fff",cursor:"pointer" ,margin:"0px 20px" });
    }
    console.log("rahul");
  }, [dsplay]);
  return (
    <>
      <div
        className="hdr"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000",
          opacity: "0.95",
        }}
      >
        <div className="header">
          <div
            onClick={() => {
              change();
            }}
            style={cls}
            className="hambergar"
          >
            <MenuIcon className="hmg" />
          </div>

          <NavLink exact activeClassName="active" to="/">
            <img className="header_logo" src={Logo} alt="logo" />
          </NavLink>

          <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="search_icon" />
            {/* {logo} */}
          </div>
          <div style={clsi}  onClick={()=>{setOpen(true)}} className="header_nav">
            Add Product
           
           
          </div>
          <div className="basket ms-2">
            <NavLink exact activeClassName="basket" to="/checkout">
              <ShoppingBasketIcon className="icon" style={{ color: "white" }} />
            </NavLink>
            <span
              style={{ color: "white", fontWeight: "500", margin: "10px" }}
              className="basket_item_count"
            >
              {itemInCart}
            </span>
          </div>
        </div>
        <div>
          <div style={mobile} className="header_nav mobile-nav pb-2 bg-dark">
            <div>
              
            </div>
            <div className="mt-2 ">
             
            </div>
          </div>
        </div>

      </div>
      {open&&<AddProduct setIsAddProduct={setOpen}/>}
    </>
  );
}
export default Header;
