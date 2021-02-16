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
      <h2>Зарегистрироваться</h2>
      <form className='login'>
        <label for="name-user">Имя пользователя :</label>
        <input type="text" id="name-user"/>
        <label for='password'>Пароль :</label>
        <input type="password" id='password'/>
        <label for='repeatPassword'>Пароль :</label>
        <input type="password" id='repeatPassword'/>
        <label for='email'>Э-почта :</label>
        <input type="email" id='email'/>
        <div className="btns">
          <input type="submit" value="Регистрация" className='btn'/>
          <Link to="/" className="reset">Отмена</Link>
        </div>
      </form>
    </div>
  );
}