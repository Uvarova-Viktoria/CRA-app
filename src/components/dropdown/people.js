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
import ItemPeople from "./itemPeople";
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  font-family: 'Marck Script', cursive;
`
export default function People(){
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
  const listItems = numbers.map((number) =>
    <ItemPeople/>
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
        grid-gap: 10px;
      `}>{listItems}</div>);
      </div>

  );
}
  