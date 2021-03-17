import React, { useEffect, useState } from "react";
import { css } from '@emotion/css';
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
import { useMemo } from "react";
import queryString from 'query-string';
import searchIcon from '../img/search.svg';
const settingPanel = [
  { key: 1, text: "Фильмы", value: 1 },
  { key: 2, text: "Сериалы", value: 2 },
  { key: 3, text: "Люди", value: 3 },
  { key: 4, text: "Компании", value: 4 },
  { key: 5, text: "Коллекции", value: 5 },
]

export default function SearchPage(){
  const router = useRouter();
 // console.log('location = ' + router.query.searchText);
  let searchText = router.query.searchText;
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const FEATURE_API =`https://api.themoviedb.org/3/search/movie?api_key=c35b372cfa1b3f13b4f773b276d1de6e&language=ru&query=${searchText}`;

  const [movies,setMovie]  = useState([]);

  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
        //console.log(data.results);
      })
  })
  const settingItems = settingPanel.map((item) =>
    <li className={css`
      width: 100%;
      padding: 10px 20px;
      font-size: 1em;
      line-height: 1.4em;
      margin: 0;
      
      &:hover {
        background-color: rgba(0,0,0,0.08);
        cursor: pointer;
      }
      &:selected {
        background-color: rgba(0,0,0,0.08);
      }
    `}>
    {item.text}
    </li>   
  );
  
  const searchResault = movies.map((movie)=>
      <div className={css`
        display: flex;
        box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
        margin-bottom: 30px;
      `}>
        <Link to={'/moviePage/'+movie.id} ><img src={IMG_API + movie.poster_path} alt={movie.original_title}  className = {css`
          width: 100px; 
          &:hover {
            opacity: 0.5;
          }
        `}/></Link>
        <div className={css` 
          text-align: left;
          padding: 10px 15px;
          `}>
          <h2 className={css`
            font-size: 1.2em;
            line-height: 1.2em;
            margin-bottom: 0;
            &+span {
              display: block;
              color: #999;
              margin: 10px 0 20px;
            }
            &+p{
              font-size: 1em;

            }
          `}>{movie.title}</h2>
          <span>{movie.release_date}</span>
          <p>{movie.overview}</p>
        </div>
      </div>
  )

  return(
    <div>
      <div className={`search-input ${css`
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        margin-top: 10px;
      `}`}>
        <input type="text" placeholder="Найти фильм, сериал, персону..." value={searchText} className={css` 
          padding: 10px;
          padding-left: 50px;
          outline: none;
          border: none;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.08);
          width: 100%;
          height: 44px;
          background: url(${searchIcon});
          background-repeat: no-repeat;
          background-size: 15px;
          background-position-x: 20px;
          background-position-y: 50%;
          `}/>
         
      </div>
      <div className={css`
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        padding: 50px 0; 
        justify-content: left;
      `}>
        <div className={`resault-search-panel ${css`
            min-width: 260px;
            border: 1px solid rgba(0,0,0,0.08);
            border-radius: 5px;
            margin-right: 50px;
          `}`}>
            <h3 className={css`
              font-weight: 600;
              padding: 20px;
              color: #fff;
              background-color: #01b4e4;
            `}>Результаты поиска</h3>
            <div className={`setting-panel ${css``}`}>
              <ul className={css`
                list-style: none;
                text-align: left;
                margin: 0;
                padding: 0;
                &>li:first-child {
                  background-color: rgba(0,0,0,0.08);
                }
              `}>
              {settingItems}
              </ul>
            </div>
          </div>
          <div>
          {searchResault}
          </div>
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