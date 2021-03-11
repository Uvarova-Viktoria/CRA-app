import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import ItemPeople from "./peopleSliderCard";
import styled from '@emotion/styled';
import { css } from '@emotion/css';
const FEATURE_API ="https://api.themoviedb.org/3/person/popular?api_key=c35b372cfa1b3f13b4f773b276d1de6e";

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  font-family: 'Marck Script', cursive;
`
export default function People(){
  const [people, setPeople]  = useState([]);

  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      })
  })
  const listItems = people.map((item) =>
    <ItemPeople key={item.id} {...item}/>
  );
  return(
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 20px;
      background-color: #90cea1;
      `}>
      <H2>Популярные люди</H2>
      <div className={css`
        display: grid;
        grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        margin-top:50px;
      `}>{listItems}</div>
      </div>

  );
}
  