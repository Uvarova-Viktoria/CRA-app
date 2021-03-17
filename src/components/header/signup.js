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
  padding-top: 50px;
`
const Label = styled.label`
  display: block;
  margin: 10px 0;
`
const Input = styled.input`
  width: 80%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 24px;
`
export default function Login(){
  return(
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      text-align: center;
      background-color: #90cea1;
      `}>
      <H2>Зарегистрироваться</H2>
      <form className={css`
        padding: 50px 0;
        width: 400px;
        margin: 0 auto;
        background-color: rgba(255,255,255,0.5);
        border: 5px dotted;
      ` }>
        <Label for="name-user">Имя пользователя :</Label>
        <Input type="text" id="name-user"/>
        <Label for='password'>Пароль :</Label>
        <Input type="password" id='password'/>
        <Label for='repeatPassword'>Подтверждение пароля :</Label>
        <Input type="password" id='repeatPassword'/>
        <Label for='email'>Э-почта :</Label>
        <Input type="email" id='email'/>
        <div className={css`
          margin-top:20px;
        `}>
          <input type="submit" value="Регистрация" className={css`
            width: 40%;
            background-color: #01b4e4;
            border: none;
            color: #fff;
            transition: 1s linear;
            padding: 10px;
            outline: none;
            border-radius: 24px;
            font-size: 16px;
            margin-right: 10px;
            &:hover {
              background-color: #0d253f;
            }
          `}/>
          <Link to="/" className="reset">Отмена</Link>
        </div>
      </form>
    </div>
  );
}