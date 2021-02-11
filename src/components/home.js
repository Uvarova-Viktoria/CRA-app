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
export default function Home() {
  return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/timePage">Когда заработает сайт?</Link>
          </li>
        </ul>

        <h1>Добро пожаловать. Миллионы фильмов, сериалов и людей.</h1>
        <FilmSlider />
      </div>
      
    
  );
}
