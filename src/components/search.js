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

export default function Search(){
  return(
    <form className={css`
     margin-top: 20px;
    `}>
      <input type="text" placeholder="Найти фильм, сериал, персону..." className={css`
        width: 35%;
        padding: 10px;
        padding-left: 20px;
        outline: none;
        border: none;
        border-radius: 24px;
      `}/>
      <input type="submit" value="Search" className={css`
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 24px;
        width: 6%;
        position: absolute;
        right: 35%;
        background-color: #12ebdc;
        color: #fff;
        transition: 1s linear;
      `}/>
    </form>
  );
}