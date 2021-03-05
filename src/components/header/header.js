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
import {Dropdown, ListItem, Menu} from 'semantic-ui-react';
import logo from "../../logo.svg";
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const primaryColor = '#0d253f';
const secondColor = '#01b4e4';
const thirdColor = '#90cea1';

const optionsFilms = [
  { key: 1, text: <Link to="/movies">Популярные</Link>, value: 1 },
  { key: 2, text: <Link to="/movies/now-playing">Смотрят сейчас</Link>, value: 2 },
  { key: 3, text: <Link to="/movies/upcoming">Ожидаемые</Link>, value: 3 },
  { key: 4, text: <Link to="/movies/top-rated">Лучшие</Link>, value: 4 },
]
const optionsSeries = [
  { key: 1, text: <Link to="/tw-series">Популярные</Link>, value: 1 },
  { key: 2, text: <Link to="/tw-series/airing-today">В эфире сейчас</Link>, value: 2 },
  { key: 3, text: <Link to="/tw-series/on-the-air">По телевидению</Link>, value: 3 },
  { key: 4, text: <Link to="/tw-series/top-rated">Лучшие</Link>, value: 4 },
]
const optionsPeople = [
  { key: 1, text: <Link to="/people">Популярные</Link>, value: 1 },
]
const optionsMore = [
  { key: 1, text: <Link to="/more">Обсуждения</Link>, value: 1 },
  { key: 2, text: <Link to="/more">Доска почета</Link>, value: 2 },
  { key: 3, text: <Link to="/more">Поддержка</Link>, value: 3 },
  { key: 4, text: <Link to="/more">API</Link>, value: 4 },
]
const dropdownItems = [
  {
    key: 1,
    text : <MenuCompact text='Фильмы' subtitle={optionsFilms}/>,
    value: 1
  },
  {
    key: 2,
    text : <MenuCompact text='Сериалы' subtitle={optionsSeries}/>,
    value: 2
  },
  {
    key: 3,
    text : <MenuCompact text='Люди' subtitle={optionsPeople}/>,
    value: 3
  },
  {
    key: 4,
    text : <MenuCompact text='Еще' subtitle={optionsMore}/>,
    value: 4
  }
];
function MenuCompact(props) {
  return (
    <Menu compact className={css`background: transparent !important;`}> 
      <Dropdown text = {props.text} options={props.subtitle} simple item  className={css`color: #fff !important;`} />
    </Menu>
  );
}
const timeMenu = [
  { key: 1, text: <Link to="/about">О нас</Link>, value: 1 },
  { key: 2, text: <Link to="/" className="main_link">Главная</Link>, value: 2 },
  { key: 3, text:  <Link to="/timePage" className="displayNone">Когда заработает сайт?</Link>, value: 3 }
];
const otherMenu = [
  { key: 1, text: 'Ru/En', value: 1 },
  { key: 2, text:  <Link to="/login">Войти</Link>, value: 2 },
  { key: 3, text:  <Link to="/signup">Зарегистрироваться</Link>, value: 3 }
];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li className={css`
      margin-right: 10px;
      &>a{
        color:#fff;
      }
    `}>
    {number.text}
    </li>   
  );
  return (
    <ul className={css`
      list-style: none;
      display: flex;
      align-items: center;
    `}>{listItems}</ul>
  );
}

export default function Header() {
  return(
    <header className="app-header">
    <ul className={css`
      list-style: none;
      display: flex;
      padding: 20px 0;
      margin: 0;
      background-color: #0d253f;
      color: #fff;
      justify-content: center;
      align-items: center;
    `}>
     <Link to="/"><img src={logo} alt="logo tmdb" className={css`
              width:154px;
            `}/></Link>
      <NumberList numbers={dropdownItems}/>
      <NumberList numbers={timeMenu} />
      <NumberList numbers={otherMenu} />
    </ul>
    </header>
    
  );
}
