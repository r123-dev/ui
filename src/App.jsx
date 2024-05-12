import React, { createContext, useContext, useEffect, useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import axios from "axios";
import Register from "./Components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Login from "./Components/Login";

export const AuthContext = createContext({});

const AuthContextWrapper = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const [userData, setUserData] = useState({
    isSignIn: false,
    email: "",
    userName: "",
  });
  //useEffect(() => {
  //   const verify = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:5000/api/auth/isValidUser`,
  //         {
  //           headers: {
  //             token: `${localStorage?.getItem("token")}`,
  //           },
  //         }
  //       );

  //       if (res.data.success) {
  //         history.push("/");
  //         return;
  //       } else {
  //         history.push("/login");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       history.push("/login");
  //     }
  //   };
  //   verify();
  // }, []);
  return (
    <AuthContext.Provider value={{ user: userData }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthContextWrapper>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
      </Switch>
    </AuthContextWrapper>
  );
}

export default App;
