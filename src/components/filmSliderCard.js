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
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FilmsSliderCard = ({ title, poster_path, overview, vote_average, id, picSize}) =>(
  <div className="one-card">
    <Link to={'/moviePage/'+id} ><img src={IMG_API + poster_path} alt={title}  className = {css`
      width: ${picSize}; 
    `}/></Link>

    <div>
      <h3 className='film-title'>{title}</h3>
      <span className = {`vote-average ${css`
        display:inline-block;
        padding: 10px;
        border: 2px solid red;
        border-radius: 50%;
        margin: 10px 0;
        composes: ${'some-class'};
        &:hover {
          background-color: red;
          cursor: pointer;
        }
      `}`}>{vote_average}</span>
    </div>
  </div>
);
export default FilmsSliderCard;
