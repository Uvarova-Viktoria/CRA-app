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
import pic from "./img/1.jpg";
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import {Dropdown, Menu} from 'semantic-ui-react';

const optionsOverview = [
  { key: 1, text: <Link to="/">Основное</Link>, value: 1 },
  { key: 2, text: <Link to="/">Альтернативные названия</Link>, value: 2 },
  { key: 3, text: <Link to="/">Актеры и команды</Link>, value: 3 },
  { key: 4, text: <Link to="/">Даты выхода</Link>, value: 4 },
  { key: 5, text: <Link to="/">Переводы</Link>, value: 5 },
]
const optionsMedia = [
  { key: 1, text: <Link to="/">Задники</Link>, value: 1 },
  { key: 2, text: <Link to="/">Logos</Link>, value: 2 },
  { key: 3, text: <Link to="/">Постеры</Link>, value: 3 },
  { key: 4, text: <Link to="/">Видеоролики</Link>, value: 4 },
]
const optionsFandom = [
  { key: 1, text: <Link to="/">Обсуждения</Link>, value: 1 },
  { key: 2, text: <Link to="/">Рецензии</Link>, value: 2 },
]
const optionsShare = [
  { key: 1, text: <Link to="/">Поделится ссылкой</Link>, value: 1 },
  { key: 2, text: <Link to="/https://www.facebook.com">Facebook</Link>, value: 2 },
  { key: 3, text: <Link to="/https://twitter.com/">Tweet</Link>, value: 3 },
]
const dropdownItems = [
  {
    key: 1,
    text : <MenuCompact text='Обзор' subtitle={optionsOverview}/>,
    value: 1
  },
  {
    key: 2,
    text : <MenuCompact text='Медиа' subtitle={optionsMedia}/>,
    value: 2
  },
  {
    key: 3,
    text : <MenuCompact text='Фандом' subtitle={optionsFandom}/>,
    value: 3
  },
  {
    key: 4,
    text : <MenuCompact text='Поделится' subtitle={optionsShare}/>,
    value: 4
  }
];
function MenuCompact(props) {
  return (
    <Menu compact className={css`
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    `}> 
      <Dropdown text = {props.text} options={props.subtitle} simple item />
    </Menu>
  );
}
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
      justify-content: center;
    `}>{listItems}</ul>
  );
}
export default function SmallDropdown(){
  return(
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      text-align: center;
    `}>
       <NumberList numbers={dropdownItems} />
    </div>
  );
}