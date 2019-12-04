import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Servers from "./components/Servers/Servers";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";

function App() {
  return (
    <Switch>
      <Route path="/servers">
        <Servers />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
