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
import FilmSlider from "../filmSlider";
import {Dropdown, Form, Menu, Checkbox} from 'semantic-ui-react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import FilterPanel from './filterPanel';

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  font-family: 'Marck Script', cursive;
`
export default function Series(){
  return(
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 20px;
      background-color: #90cea1;
      `}>
      <H2>Seties</H2>
      
      <div className={css`
        display: flex;
      `}>
        <FilterPanel/>
        <FilmSlider />
      </div>
    </div>
  );
}
  