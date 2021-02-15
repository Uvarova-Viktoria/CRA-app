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


export default function Login(){
  return(
    <div>
      <h2>Войти в свою учетную запись</h2>
      <form className='login'>
        <label for="name-user">Имя пользователя :</label>
        <input type="text" id="name-user"/>
        <label for='password'>Пароль :</label>
        <input type="password" id='password'/>
        <div className="btns">
          <input type="submit" value="Войти" className='btn'/>
          <Link to="/reset-password">Сбросить пароль</Link>
        </div>
      </form>
    </div>
  );
}