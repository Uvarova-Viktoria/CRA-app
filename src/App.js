import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import man from "./man.svg";
export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {

  return (
    <div>
      <Switch >
        <Route exact path="/" children={<Home />} />
        <Route path="/timePage" children={<TimePage />} />
        <Route path="/about" children={<About />} />
      </Switch>
    </div>
  );
}


function Home() {
  return (
      <div>
        <ul className="nav">
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/timePage">Когда заработает сайт?</Link>
          </li>
        </ul>

        <h1>Добро пожаловать. Миллионы фильмов, сериалов и людей.</h1>
        
      </div>
      
    
  );
}

function TimePage(){
  return (
    <div>
        <Link to="/">Главная</Link>
        <h1>Мы добавляем немного магии на страницу, скоро она заработает в полную силу</h1>
        <img src={man} className="man-img"></img>
    </div>
    

  );
}
function About() {
  return (
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
    

  );
  
}