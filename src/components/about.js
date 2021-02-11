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


export default function About() {
  return (
    <Router>
      <div>
          <Link to="/">Главная</Link>
          <h1>О нас</h1>
          <ul className="box">
            <li>На нашем сайте вы сможете:
              <ul className="list-you-can">
                <li>Посмотреть фильмы разных жанров</li>
                <li>Посмотреть любимые сериалы</li>
                <li>Узнать последние тренды</li>
              </ul>
            </li>
          </ul>
      </div>
    </Router>
    
  );
}