import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  Redirect
} from "react-router-dom";
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import About from "./components/about";
import TimePage from "./components/timePage";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Header from "./components/header/header";
import Movie from "./components/movie";

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
      <Switch>
        <Route exact path="/" children={<Home />}/>
        <Route path="/timePage" children={<TimePage />} />
        <Route path="/about" children={<About />} />
        <Route path="/login" children={<Login />} />
        <Route path="/signup" children={<Signup />} />
        <Route path="/movies" children={<Movie />} />
        <Redirect to="/timePage" from="/" />
      </Switch>
    </div>
  );
}
