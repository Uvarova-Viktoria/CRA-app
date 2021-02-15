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

export default function Header() {
  return(
    <header className="app-header">
    <ul className='nav'>
      <li>
        <ul className="dropdown_menu">
              <li>Logo</li>
              <li>
                <Link to="/movies">Фильмы</Link>
                <div className="dropdown_list-animation">
                  <ul className="dropdown_list">
                    <li><Link to="/movies">Популярные</Link></li>
                    <li><Link to="/movies">Смотрят сейчас</Link></li>
                    <li><Link to="/movies">Ожидаемые</Link></li>
                    <li><Link to="/movies">Лучшие</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/tw-series">Сериалы</Link>
              </li>
              <li>
                <Link to="/people">Люди</Link>
              </li>
              <li>
                <Link to="/more">Еще</Link>
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