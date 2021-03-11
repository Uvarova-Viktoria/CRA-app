import React from "react";
import { css } from '@emotion/css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
//import PersonalPageFilm from "./components/personalPageFilm";  

const IMG_API = "https://image.tmdb.org/t/p/w1280";


const FilmsSliderCard = ({ title, poster_path, overview, vote_average, id}) =>(
  <div className="one-card">
    <Link to={'/moviePage/'+id} ><img src={IMG_API + poster_path} alt={title}  className = {css`
      width: 250px; 
    `}/></Link>

    <div>
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
  </div>
);
export default FilmsSliderCard;
