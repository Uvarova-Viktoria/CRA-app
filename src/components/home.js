import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import FilmSlider from "./filmSlider";
import Search from "./search";
export default function Home() {
  return (
      <div> 
        <h1>Добро пожаловать. Миллионы фильмов, сериалов и людей.</h1>
        <Search />
        <FilmSlider />
      </div>
      
    
  );
}
