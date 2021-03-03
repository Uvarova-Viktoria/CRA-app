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
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  font-family: 'Marck Script', cursive;
`
const textAbout = [
  {key: 1, text:'Посмотреть фильмы разных жанров' },
  {key: 2, text:'Посмотреть любимые сериалы' },
  {key: 3, text:'Узнать последние тренды' },
]
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li className={css`
     text-align: left;
     font-family: 'Marck Script', cursive;
     font-size:20px;
    `}>
    
    {number.text}
    </li>
  );
  return (
    <ul className={css`
    margin: 0 auto;
    margin-top:20px;
   `}>{listItems}</ul>
  );
}

export default function About() {
  return (
    <Router>
      <div className={css`
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        text-align: center;
        background-color: #90cea1;
        height: 500px;
        `}>
          <H2>О нас</H2>
          <NumberList numbers={textAbout}/>
      </div>
    </Router>
    
  );
}

/*
<ul className={css`
            text-decoration: none;
          `}>
            <li>На нашем сайте вы сможете:
              <ul className="list-you-can">
                <li>Посмотреть фильмы разных жанров</li>
                <li>Посмотреть любимые сериалы</li>
                <li>Узнать последние тренды</li>
              </ul>
            </li>
          </ul>
*/ 