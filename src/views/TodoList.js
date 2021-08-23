import React, { useContext, createContext, useState } from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

import MyTasks from "../components/MyTasks";
import { authContext } from "../App";
import LoginPage from "../components/LoginPage";
import AuthButton from "../components/AuthButton";

export const globalContext = createContext();

function ToDoList() {
  const style = {
    maxWidth: "960px",
  };
  return (
    <Router>
      <HeaderBar />
      <AuthButton />
      <div className="tw-flex tw-justify-center">
        <globalContext.Provider value={useTasks()}>
          <div style={style}>
            <Switch>
              <PrivateRoute path="/task">
                <MyTasks />
              </PrivateRoute>
              <Route path="/in-progress">
                <InProgress />
              </Route>
              <Route path="/completed">
                <Completed />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </globalContext.Provider>
      </div>
    </Router>
  );
}

function useTasks() {
  const [tasks, setTasks] = useState([]);

  return {
    tasks,
    setTasks
  }
}

function HeaderBar() {
  return (
    <div className="tw-w-screen tw-h-14 tw-flex tw-items-center tw-justify-center tw-border-b tw-border-solid tw-border-black">
      <button className="tw-m-4">
        <Link to="/task">My Tasks</Link>
      </button>
      <button className="tw-m-4">
        <Link to="/in-progress">In Progress</Link>
      </button>
      <button className="tw-m-4">
        <Link to="/completed">Completed</Link>
      </button>
    </div>
  );
}

function InProgress() {
  const { tasks } = React.useContext(globalContext);

  const doing = tasks.filter(task => !task.checked);
  return <div>{doing.map((task, index) => {
    return (
      <div key={index}>
        {task.title}
      </div>
    )
  })}</div>;
}
function Completed() {
  const { tasks } = React.useContext(globalContext);

  const done = tasks.filter(task => task.checked);
  return <div>{done.map((task, index) => {
    return (
      <div key={index}>
        {task.title}
      </div>
    )
  })}</div>;
}

function PrivateRoute(props) {
  let auth = useContext(authContext);
  return (
    <Route
      {...props.rest}
      render={({ location }) =>
        auth.user ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default ToDoList;
