import React from "react";
import styled from '@emotion/styled';
import { css } from '@emotion/css';


import FilmSlider from "./filmSlider";
import Search from "./search";

const H1 = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  font-family: 'Marck Script', cursive;
  padding-top: 25px;
`
const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  font-family: 'Marck Script', cursive;
`
export default function Home() {
  return (
      <div className={css`
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        text-align: center;
        background-color: #90cea1;
        `}> 
        <H1>Добро пожаловать.</H1> <H2>Миллионы фильмов, сериалов и людей.</H2>
        <Search/>
        <H2>Popular Films:</H2>
        <FilmSlider typePath='/movie/popular'/>
      </div>
      
    
  );
}
