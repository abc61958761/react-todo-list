import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { authContext } from "../App";

function LoginPage() {
    let auth = useContext(authContext);
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(history)
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
    };
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
  }
  
  export default LoginPage;
