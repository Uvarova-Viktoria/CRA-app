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
  { key: 2, text: <Link to="/movies">Смотрят сейчас</Link>, value: 2 },
  { key: 3, text: <Link to="/movies">Ожидаемые</Link>, value: 3 },
  { key: 4, text: <Link to="/movies">Лучшие</Link>, value: 4 },
]
const optionsSeries = [
  { key: 1, text: <Link to="/tw-series">Популярные</Link>, value: 1 },
  { key: 2, text: <Link to="/tw-series">В эфире сейчас</Link>, value: 2 },
  { key: 3, text: <Link to="/tw-series">По телевидению</Link>, value: 3 },
  { key: 4, text: <Link to="/tw-series">Лучшие</Link>, value: 4 },
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
    'title' : 'Фильмы',
    'subtitle' :  'optionsFilms'
  },
  {
    'title' : 'Сериалы',
    'subtitle' : 'optionsSeries'
  },
  {
    'title' : 'Люди',
    'subtitle' : 'optionsPeople'
  },
  {
    'title' : 'Еще',
    'subtitle' : 'optionsMore'
  }
];
const timeMenu = ['О нас','Главная','Когда заработает сайт?' ];
const otherMenu = ['Ru/En','Войти','Зарегистрироваться' ];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>
    {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
function MenuCompact(props) {
  const data = props.itemMenu;
  const itemMenu = data.map(function(item, index){
    return (
      <Menu compact>
        <Dropdown text = {item.title} options={item.subtitle} simple item />
      </Menu>
    )
  })
  return (
    <div>
      {itemMenu}
    </div>
  )
}
const dropdownMenu = [
  <img src={logo} alt="logo tmdb" className={css`
              width:154px;
            `}/>,
  <MenuCompact itemMenu={dropdownItems} />
];

export default function Header() {
  return(
    <header className="app-header">
    <ul className={css`
      list-style: none;
      display: flex;
      padding-top: 20px;
    `}>
     <NumberList numbers={dropdownMenu} />
     <NumberList numbers={timeMenu} />
     <NumberList numbers={otherMenu} />
      
    </ul>
    </header>
    
  );
}
