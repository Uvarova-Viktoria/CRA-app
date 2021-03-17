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
import man from "../img/man.svg";
import { css } from '@emotion/css';
import styled from '@emotion/styled';
const H1 = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  font-family: 'Marck Script', cursive;
  padding-top: 25px;
`
export default function TimePage(){
  return (
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      text-align: center;
      background-color: #90cea1;
      `}>
        <H1>Мы добавляем немного магии на страницу, скоро она заработает в полную силу</H1>
        <img src={man} alt="pictures of a tired man" className = {css`
          width: 50%;
        `}></img>
    </div>
  );
}
