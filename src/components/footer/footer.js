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
import logo from "../../logo.svg";

const footerTitle = ['Главное','Участвуйте','Сообщество','О праве'];

const optionsMain = [
  { key: 1, text: <Link to="/about">О TMDb</Link>, value: 1 },
  { key: 2, text: <Link to="/">Связаться с нами</Link>, value: 2 },
  { key: 3, text: <Link to="/">Форумы поддержки</Link>, value: 3 },
  { key: 4, text: <Link to="/">API</Link>, value: 4 },
  { key: 5, text: <Link to="/">Статус системы</Link>, value: 5 },
]
const optionsPart = [
  { key: 1, text: <Link to="/">Писание об участии</Link>, value: 1 },
  { key: 2, text: <Link to="/">Сторонние приложения</Link>, value: 2 },
  { key: 3, text: <Link to="/">Добавить новый фильм</Link>, value: 3 },
  { key: 4, text: <Link to="/">Добавить новый сериал</Link>, value: 4 },
]
const optionsCommunity = [
  { key: 1, text: <Link to="/">Руководства</Link>, value: 1 },
  { key: 2, text: <Link to="/">Обсуждения</Link>, value: 2 },
  { key: 3, text: <Link to="/">Доска почета</Link>, value: 3 },
  { key: 4, text: <Link to="/">Twitter</Link>, value: 4 },
]
const optionsRight = [
  { key: 1, text: <Link to="/">Условия использования</Link>, value: 1 },
  { key: 2, text: <Link to="/">API Правила использования</Link>, value: 2 },
  { key: 3, text: <Link to="/">Политика конфиденциальности</Link>, value: 3 },
]
const H3 = styled.h3`
  margin: 0;
  text-align: left;
  font-weight: bold;
  font-size: 1.4em;
  line-height: 1.4em;
  text-transform: uppercase;
`
const Button = styled.button`
  border: none;
  display: block;
  width: 100%;
  padding: 10px 20px;
  margin-top: 50px;
  font-size: 1.5rem;
  outline: none;
  transition: 0.3s all ;
  background-color: #fff;
  color: #01b4e4;
  &:hover{
    background-color: #01b4e4;
    color: white;
    cursor: pointer;
  }
`

function FooterBox(props){
  const items = props.subtitle;
  const listItems = items.map((item)=>
   <li className={css`
   margin-top: 5px;
    &>a{
      color: #fff;
      font-size: 14px;
    }
   `}>{item.text}</li> 
  )
  return (
    <div className={css`
      margin-left: 50px;
    `}>
      <H3>{props.title}</H3>
      <ul className={css`
        list-style: none;
        text-align: left;
        padding: 0;
        margin: 0;
      `}>
        {listItems}
      </ul>
    </div>
  );
}

export default function Footer(){
  return(
    <footer>
      <div className={css`
      background-color:#0d253f;
      color: #fff;
      `}>
        <div className ={css`
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          justifu-content: center;
          padding: 80px 0;
        `}>
          <div>
            <Link to="/"><img src={logo} alt="logo tmdb" className={css`
                    width:154px;
              `}/></Link>
            <Button as="a" href="/signup">Вступить в сообщество</Button>
          </div>
          
          <FooterBox title={footerTitle[0]} subtitle={optionsMain}/>
          <FooterBox title={footerTitle[1]} subtitle={optionsPart}/>
          <FooterBox title={footerTitle[2]} subtitle={optionsCommunity}/>
          <FooterBox title={footerTitle[3]} subtitle={optionsRight}/>
        </div>
        
      </div>
    </footer>
  );
}