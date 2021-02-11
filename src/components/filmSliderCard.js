import React from "react";
import './filmSlider.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import pic from "./img/rectangle.png";

export default function FilmsSliderCard(){
  return (
      <div className="one-card">
        <img src={pic} className="poster"></img>
        <h3>название</h3>
        <h3>рейтинг</h3>
        <input type="range" min='0' max="10" step="1"></input>
      </div>  
  );
}