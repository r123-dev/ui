import React, { useState } from "react";
import "../Css/login.css";
import Logo from "../img/amazon.png";
// import { useHistory } from "react-router";
import { NavLink, useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Register";
// import { notify } from "../../../server/route/userinfo";

const Login = () => {
 // const navigate=useNavigate();
 const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
   
    email: "",
    password: "",
    
  }); 
  const handleInput = (e) => {
    
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const notify = (mssg) => {
    toast.error(mssg, { position: toast.POSITION.TOP_CENTER });
  };
  const notify1 = (mssg) => {
    toast.success(mssg, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
  };
  const send = async (e) => {
    const response= await fetch(`http://localhost:5000/auth/login`,{
      method:"POST",
       headers:{
        'Content-Type':"application/json",
        
       },
       body:JSON.stringify(user),
    })
    const data=await response.json();
      if(data.token)
      {
       
      localStorage.setItem("token",data.token);
      history.push('/dashboard');
      }
};
  // const register = async (e) => {
  //   // try {
  //   //   e.preventDefault();
  //   //   console.log("rahul");
  //   //   const data = await fetch("/register", {
  //   //     method: "POST",
  //   //     headers: {
  //   //       "Content-Type": "application/json",
  //   //     },
  //   //     body: JSON.stringify({
  //   //       email,
  //   //       password,
  //   //     }),
  //   //   });

  //   //   const res = await data.json();
  //   //   if (data.status === 422) {
  //   //     notify(res.message);
  //   //     return;
  //   //   }
  //   //   notify1(res.message);

  //   //   console.log(res);
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  //   try{
  //     const response= await fetch(`http://localhost:5000/api/auth/register`,{
  //       method:"POST",
  //        headers:{
  //         'Content-Type':"application/json",
  //        },
  //        body:JSON.stringify(user),
  
  
  //     });
  //     const data=await response.json();
  //     if(data.token)
  //     {
       
  //     localStorage.setItem("token",data.token);
  //     history.push('/dashboard');
  //     }
  //   }
  //   catch(err)
  //   {
  //     console.log(err);
  //   }
   

          
  // };
  return (
    <div className="loginpage">
      <div className="loginpadding">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo pic" />
          </NavLink>
        </div>
        <div className="inner_login">
          <div>
            <h2 style={{ fontWeight: "400" }}>Sign-in</h2>
          </div>
          <form>
            <div>
              <label className="fw-bold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label className="fw-bold" htmlFor="pass">
                Password
              </label>
              <input
                id="pass"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div className="buutn">
              <button onClick={send}>SignIn</button>
            </div>
          </form>
          <div className="buutn">
          <button onClick={() => history.push("/register")}>
        Create New Account
      </button>
          </div>
        </div>
        <div className="experiment"></div>
      </div>
    </div>
  );
};
export default Login;