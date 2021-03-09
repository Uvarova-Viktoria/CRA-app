import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import pic from "./img/1.jpg";
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import SmallDropdown from './smallDropdown';

const H2 = styled.h2`
  font-size: 36px;
  font-weight:700;
  &>span {
    opacity: 0.8;
    font-weight: 400;
  }
`

export default function PersonalPageFilm(){
  return(
    <div >
      <SmallDropdown />
      <div className={css`
        background-color: #8682B9;
        `}>
        <div className={css`
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          padding: 50px 0; 
          justify-content: space-between;
        `}>
          <div className='poster'>
            <img src={pic} alt="film poster" className={css`width:300px;`}></img>
          </div>
          <div className={css`
            text-align:left;
            margin-left: 100px;
            color: #fff;
          `}>
            <H2>Ривердейл <span>(2017)</span></H2>
            <div className={css`
              &>span>a {
                color: #fff;   
                margin-right: 10px;
              }
              &>span {
                margin-right: 10px;
              }
            `}>
                <span className='release'>26/02/2021</span>
                <span className='genre'>
                  <a href='/genre/boevik'>боевик</a>
                  <a href='/genre/komedia'>комедия</a>
                  <a href='/genre/family'>семейный</a>
                </span>
                <span className='runtime'>1:47</span>
            </div>
            <ul className='users-action'>
              <li>80% пользовательский счет</li>
              <li></li>
            </ul>
            <div className='header-info'> 
              <h3 className={css`
                font-size: 1.1em;
                font-weight: 400;
                font-style: italic;
                opacity: 0.7;
              `}>Лучшие враги. Худшие друзья.</h3>
              <h3>Обзор</h3>
              <p>
              Кайла, работница престижного отеля, где обитает мышонок Джерри, рискующий нарушить ход дорогой свадьбы. Чтобы разобраться с грызуном, она нанимает уличного кота Тома, но решить проблему не так уж и просто.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}