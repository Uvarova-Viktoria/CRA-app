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
import React from "react";
import 'semantic-ui-css/semantic.min.css';

import About from "./components/header/about";
import TimePage from "./components/header/timePage";
import Home from "./components/home";
import Login from "./components/header/login";
import Signup from "./components/header/signup";
import Header from "./components/header/header";
import Movie from "./components/dropdown/movie";
import Series from "./components/dropdown/series";
import People from "./components/dropdown/people";
import Footer from "./components/footer/footer";
import PersonalPageFilm from "./components/personalPage/personalPageFilm";  
import PersonalPagePeople from "./components/personalPage/personalPagePeople"; 
import Search from "./components/search/searchPage"; 
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
        <Route path="/search" children={<Search />} />
        <Route path="/movie/popular" children={<Movie />} />
        <Route path="/movie" children={<Movie />} />
        <Route path="/tv/popular" children={<Movie />} />
        <Route path="/tv" children={<Movie />} />
        <Route path="/people" children={<People />} />
        <Route path="/person/:id" render={()=>(<PersonalPagePeople />)} />
        <Route path="/moviePage/:id" render={()=>(<PersonalPageFilm />)} />
        <Redirect to="/timePage" from="/" />
      </Switch>
      <Footer/>
    </div>
  );
}
