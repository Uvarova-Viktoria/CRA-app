import React from "react";
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Toggle from './toggle';

import FilmSlider from "./filmSlider";
import SearchElement from "./search/searchElement";
const H1 = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  font-family: 'Marck Script', cursive;
  padding-top: 25px;
  background-color: #90cea1;
`
const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 30px 0;
  font-family: 'Marck Script', cursive;
  text-align: left;
`
export default function Home() {

  return (
      <div className={css`
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        text-align: center;
       /* background-color: #90cea1;*/
        `}> 
        <div className={css`background-color: #90cea1; padding-bottom: 50px;`}>
          <H1>Добро пожаловать.<br />Миллионы фильмов, сериалов и людей.</H1>
          <SearchElement />
        </div>
        <section className={css`
          padding: 20px 60px ;
        `}>
          <H2>Popular Films:</H2>
          <Toggle />
          <FilmSlider typePath='/movie/popular' sizeColumn='6' display='flex' overflow='scroll'/>
        </section>
        
        
        
        <section className={css`
          background-color: #fff;
          padding-top: 50px;
        `}>
          <H2>В эфире сейчас</H2>
          <FilmSlider typePath='/tv/airing_today' sizeColumn='6' display='flex' overflow='scroll' page={1}/>
        </section>
        
      </div>
      
    
  );
}
