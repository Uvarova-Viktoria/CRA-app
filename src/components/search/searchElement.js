import React, { useState } from "react";
import { css } from '@emotion/css';
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

export default function SearchElement(){
  const [value, setValue] = useState();

  let history = useHistory();
  function handleClick(e) {
    //history.push("/search")
    //onClick={(e)=> history.push(`/search/query=${e.target.value}`)}
    e.preventDefault();
    //console.log(value);
    history.push(`/search/?searchText=${value}`);
  }
    return(
      <form className={css`
      margin-top: 20px;
      `}>
        <input type="text" placeholder="Найти фильм, сериал, персону..." value={value} onChange={(e) => setValue(e.target.value)} className={css`
          width: 35%;
          padding: 10px;
          padding-left: 20px;
          outline: none;
          border: none;
          border-radius: 24px;
        `}/>
        <input type="submit" value="Search" onClick={handleClick} className={css`
          padding: 10px;
          outline: none;
          border: none;
          border-radius: 24px;
          width: 6%;
          position: absolute;
          right: 35%;
          background-color: #12ebdc;
          color: #fff;
          transition: 0.5s linear;
          &:hover{
            background-color:#01b4e4;
            cursor: pointer;
          }
        `}/>
      </form>
    );
}