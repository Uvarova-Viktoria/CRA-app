import React from "react";
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
`
function SwitchTitle(props) {
  const title =props.title;
  <div>
    {console.log('title = '+ title)}
  </div>
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
export default function Movie(){
  const router = useRouter();
  const typePath = router.pathname;  // now-playing || upcoming ....
  return(
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 20px;
      background-color: #90cea1;
      `}>
        <SwitchTitle title={typePath}/>
      <div className={css`
        display: flex;
      `}>
        <FilterPanel/>
        <FilmSlider typePath={typePath} />
      </div>
    </div>
  );
}

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