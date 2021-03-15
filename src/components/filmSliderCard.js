import React, { useEffect, useState } from "react";
import { css } from '@emotion/css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FilmsSliderCard = ({ title, name, poster_path, overview, vote_average, id, picSize}) =>(
  <div className={`one-card ${css`
    position: relative;
  `}`}>
  
    <Link to={'/moviePage/'+id} ><img src={IMG_API + poster_path} alt={title? title: name}  className = {css`
      width: ${picSize}; 
      &:hover {
        opacity: 0.5;
      }
    `}/></Link>

    <div>
      <h3 className={css`
       font-size: 14px;
       padding-top: 20px;
    `}>{title? title: name}</h3>
      <span className = {`vote-average ${css`
        display:inline-block;
        padding: 10px;
        border: 2px solid #000;
        border-radius: 50%;
        margin: 10px 0;
        position: absolute;
        top: 268px;
        left: 14px;
        background-color: #dbd5d5;
        &:hover {
          background-color: red;
          cursor: pointer;
        }
      `}`}>{vote_average}</span>
    </div>
  </div>
);
export default FilmsSliderCard;
