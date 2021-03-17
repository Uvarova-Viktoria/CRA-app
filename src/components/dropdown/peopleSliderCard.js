import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { css } from '@emotion/css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const ItemPeople = ({ name, id,profile_path,overview,known_for}) =>(
  <div className = {css`
    text-align: center;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    `}>
   <Link to={'/person/'+id} ><img src={IMG_API + profile_path} alt={name}  className = {css`
      height: 250px; 
    `}/></Link>
    <div>
      <h3>{name}</h3>
      {
      known_for.map((item)=> 
        <span>{item.original_title}. </span>
      )
    }
    </div>
  </div>
);
export default ItemPeople;
