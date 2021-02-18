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
import {Dropdown, Menu} from 'semantic-ui-react';

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

export default function Header() {
  return(
    <header className="app-header">
    <ul className='nav'>
      <li>
        <ul className="dropdown_menu">
              <li>Logo</li>
              <li>
                  <Menu compact>
                    <Dropdown text = 'Фильмы' options={optionsFilms} simple item />
                  </Menu>    
              </li>
              <li>
                <Menu compact>
                    <Dropdown text = 'Сериалы' options={optionsSeries} simple item />
                  </Menu>  
              </li>
              <li>
                <Menu compact>
                    <Dropdown text = 'Люди' options={optionsPeople} simple item />
                  </Menu>  
              </li>
              <li>
                <Menu compact>
                    <Dropdown text = 'Еще' options={optionsMore} simple item />
                </Menu>  
              </li>
        </ul>
      </li>
      <li className='time_menu'>
        <ul>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/" className="main_link">Главная</Link>
          </li>
          <li>
            <Link to="/timePage">Когда заработает сайт?</Link>
          </li>
        </ul>
      </li>
      <li className='other_menu'>
        <ul>
          <li>Ru/En</li>
          <li>
            <Link to="/login">Войти</Link>
          </li>
          <li>
             <Link to="/signup">Зарегистрироваться</Link>
          </li>
          
      </ul>
      </li>
    </ul>
    </header>
    
  );
}