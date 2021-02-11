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
import man from "./img/man.svg";


export default function TimePage(){
  return (
    <div>
        <Link to="/">Главная</Link>
        <h1>Мы добавляем немного магии на страницу, скоро она заработает в полную силу</h1>
        <img src={man} className="man-img"></img>
    </div>
  );
}
