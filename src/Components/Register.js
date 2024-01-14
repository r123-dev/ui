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
    username:"",
    password: "",
    confirmpassword:"",
    
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
//   const send = async (e) => {
//     const response= await fetch(`http://localhost:5000/api/auth/login`,{
//       method:"POST",
//        headers:{
//         'Content-Type':"application/json",
        
//        },
//        body:JSON.stringify(user),
//     })
//     const data=await response.json();
//       if(data.token)
//       {
       
//       localStorage.setItem("token",data.token);
//       history.push('/dashboard');
//       }
// };
  const register = async (req) => {
   

    try{
         const {email,username,password,confirmpassword}=req.body;
         if(password===confirmpassword);{
      const response= await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
         headers:{
          'Content-Type':"application/json",
         },
         body: JSON.stringify({
            email,
            username,
            password,
          }),
  
  
      });
      const data=await response.json();
      if(data.token)
      {
       
      localStorage.setItem("token",data.token);
      history.push('/dashboard');
      }
    }}
    catch(err)
    {
      console.log(err);
    }
   

          
  };
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
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="Enter your name"
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
            <div >
           
            <label htmlFor="password">Confirm Password:</label>
           
            
            <input
              type="password"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={handleInput}
              
              placeholder="Enter Confirm Password"
              id="confirmpassword" />
                
             
          </div>
            
            <div className="buutn">
              <button onClick={register}>SignUp</button>
            </div>
          </form>
          <div className="buutn">
          <button onClick={() => history.push("/login")}>
        Log In
      </button>
          </div>
        </div>
        <div className="experiment"></div>
      </div>
    </div>
  );
};
export default Login;
