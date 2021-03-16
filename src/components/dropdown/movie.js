import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import queryString from 'query-string';
import { useMemo } from "react";
import FilmSlider from "../filmSlider";
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import FilterPanel from './filterPanel';

const H2 = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin: 0;
  font-family: 'Marck Script', cursive;
  margin-bottom: 20px;
`
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
function SwitchTitle(props) {
  const title =props.title;
  switch(title){
    case '/movie/popular' : return 'Популярные фильмы';
    case '/movie/now_playing' : return 'Сейчас смотрят фильмы';
    case '/movie/upcoming' : return 'Ожидаемые фильмы';
    case '/movie/top_rated' : return 'Лучшие фильмы';
    case '/tv/airing_today' : return 'Сериалы в эфире сегодня';
    case '/tv/on_the_air' : return 'Текущие сериалы в эфире';
    case '/tv/top_rated' : return 'Лучшие сериалы';
    default : return 'Популярные сериалы';
  }
}

const typePath = "/movie/popular";
//export default function Movie(){
class Movie extends React.Component {
 //const router = useRouter();
 //const typePath = router.pathname;  
 
  state = {
    count: 0,
  }
  handleClick = () => {
    this.setState(({count}) => ({
      count: count+1,
    }))
  }
  render() {
  return(
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 20px;
      background-color: #90cea1;
      `}>
        <H2><SwitchTitle title={typePath}/></H2>
      <div className={css`
        display: flex;
      `}>
        <FilterPanel/>
        <div>
        <FilmSlider typePath={typePath} sizeColumn='4' display='grid' overflow='visible' page={1} />
        {[...Array(this.state.count)].map(()=><div><h1>{this.state.count}</h1><FilmSlider typePath={typePath} sizeColumn='4' display='grid' overflow='visible' page={this.state.count} /></div>)}
          <Button onClick={this.handleClick}>Загрузить еще</Button>
        </div>
        
      </div>
    </div>
  );
  }
}
export default Movie;

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search), 
        ...params
      },
      match,
      location,
      history
    };
  }, [params, match, location, history]);
}