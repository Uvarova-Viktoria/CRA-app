import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Dropdown, Form, Menu, Checkbox} from 'semantic-ui-react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const optionsSort = [
  { key: 1, text: 'Популярности (возрастание)', value: 1 },
  { key: 2, text: 'Популярности (убывание)', value: 2 },
  { key: 3, text: 'Рейтингу (возрастание)', value: 3 },
  { key: 4, text: 'Рейтингу (убывание)', value: 4 },
]
const viewability = ['Искать все возможности просмотра?','Поточное','Бесплатно','Реклама','Прокат','Продажи' ];
const releaseDates = ['Искать все релизы?','Искать по всем странам?','Премьерный','Театральный (ограниченно)','Цифровой','Физический', 'ТВ' ];
const genres = ['боевик', 'комедия', 'вестрн','военный','драма','мультфильм','семейный'];

const Button = styled.button`
  border: none;
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  outline: none;
  transition: 0.3s all ;
  &:hover{
    background-color: #01b4e4;
    color: white;
    cursor: pointer;
  }
`

function FilterBox(props) {
  const items = props.names;
  const listItems = items.map((item)=>
    <Checkbox label= {item} className={css`width: 100%; margin-bottom: 8px;`}/>
  )
  return (
    <div>{listItems}</div>
  );
}
function FilterItem(props) {
  const isDrop = props.isDrop;
  if(isDrop){
    return (
      <div className={css`
      box-shadow: 0 1px 15px 0 rgb(34 36 38 / 15%);
      padding: 10px;
      margin-bottom: 20px;
      `}>
       <h5 className={css`
      font-size: 16px;
      `}>{props.title}</h5>
       <div>
        <div className={css`font-weight: 300; font-size:14px;`}>Сортировать результаты по:</div>
        <div className="filter">
          <Menu compact className={`icon-sort ${css`
          display: block !important;
          color: red;
        `}`}>
            <Dropdown text = 'Популярности (возрастание)'  options={optionsSort} simple item />
          </Menu> 
        </div>
      </div>   
    </div>
    );
  }
  return (
    <div className={css`
      box-shadow: 0 1px 15px 0 rgb(34 36 38 / 15%);
      padding: 10px;
      margin-bottom: 20px;
      `}>
       <h5 className={css`
       font-size: 16px;
      `}>{props.title}</h5>
       <div>     
        <FilterBox names={viewability}/>          
       </div>
    </div>
   
  );
}

export default function FilterPanel(){
  return(
    <div className={css`
      background-color: white;
      margin-right: 20px;
      padding: 20px;
    `}>
      <FilterItem title = 'Сортировать' isDrop={true}/>
      <FilterItem title = 'Фильтры' subtitle='viewability'/>
      <FilterItem title = 'Где посмотреть' /> 
      <Button>Поиск</Button>    
    </div>
  );
}