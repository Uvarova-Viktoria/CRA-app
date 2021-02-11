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

//import About from "./components/about";

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
      <Switch >
        <Route exact path="/" /><Home />
        <Route path="/timePage" children={<TimePage />} />
        <Route path="/about" children={<About />} />
      </Switch>
    </div>
  );
}
