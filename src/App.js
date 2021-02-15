import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import About from "./components/about";
import TimePage from "./components/timePage";
import Home from "./components/home";
import Login from "./components/login";

import Header from "./components/header/header";

export default function MainPage() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  return (
    <div>
      <Header/>
      <Switch >
        <Route exact path="/" children={<Home />}/>
        <Route path="/timePage" children={<TimePage />} />
        <Route path="/about" children={<About />} />
        <Route path="/login" children={<Login />} />
      </Switch>
    </div>
  );
}
