import logo from "./logo.svg";
import "./App.css";
import HelloWrold from "./HelloWorld";
// import TodoList from "./components/TodoList";
import TextInput from "./components/TextInput";
import RouteConfigExample from "./example";
import ToDoList from "./views/TodoList";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import MyTasks from "./components/MyTasks";
import AuthButton from "./components/AuthButton";

import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  useHistory,
  useLocation,
} from "react-router-dom";

function App() {
  const style = {
    maxWidth: "960px",
  };
  return (
    <div className="App tw-flex tw-flex-col tw-items-center">
      <ProvideAuth>
        <ToDoList />
      </ProvideAuth>
    </div>
  );
}

export const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default App;
