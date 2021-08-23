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

function AuthButton() {
    let auth = useContext(authContext);
    let history = useHistory();
    
    return auth.user ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.signout(() => history.replace({ pathname: "/task" }));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
  }

  export default AuthButton;