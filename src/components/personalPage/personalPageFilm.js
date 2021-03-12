import React, { useEffect, useState } from "react";
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
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import SmallDropdown from '../smallDropdown';
import Starring from './starring';
import queryString from 'query-string';
import { useMemo } from "react";
//const FEATURE_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c35b372cfa1b3f13b4f773b276d1de6e";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const H2 = styled.h2`
  font-size: 36px;
  font-weight:700;
  &>span {
    opacity: 0.8;
    font-weight: 400;
  }
`
export default function PersonalPageFilm(){
  const router = useRouter();
  //console.log(router.query.postId);
  const filmID = +router.query.id;
  const [movie,setMovie]  = useState([]);
  const FEATURE_API = `https://api.themoviedb.org/3/movie/${filmID}?api_key=c35b372cfa1b3f13b4f773b276d1de6e`;
  
  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        //console.log(data);
      })
  })
  const listItems = (
  <div className={css`
   
    background: url('${IMG_API}${movie.backdrop_path}');
    background-size: cover;
    background-repeat: no-repeat;
  `}>
    <div className={css`
          background-image: linear-gradient(to right, rgba(16.08%, 7.45%, 5.49%, 1.00) 150px, rgba(16.08%, 7.45%, 5.49%, 0.84) 100%);
    `}>
       {
         movie.id === filmID ? <div className={css`
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          padding: 50px 0; 
          justify-content: space-between;
        `}> 
         <div className='poster'>
            <img src={IMG_API+movie.poster_path } alt={movie.title}  className={css`width:300px;`}></img>
         </div>
         <div className={css`
            text-align:left;
            margin-left: 100px;
            color: #fff;
          `}>
            <H2>{movie.title} <span>{movie.release_date.slice(0,4)}</span></H2>
            <div className={css`
              &>span>a {
                color: #fff;   
                margin-right: 10px;
              }
              &>span {
                margin-right: 10px;
              }
            `}>
                <span className='release'>{movie.release_date}</span>
                <span className='genre'>
                {    
                  movie.genres.map((item)=>
                    <a href='/genre/boevik'>{item.name}</a>
                  )
                }            
                </span>
                <span className='runtime'>{movie.runtime} min</span>
            </div>
            <div className = {css`
              display:inline-block;
              padding: 10px;
              border: 2px solid red;
              border-radius: 50%;
              margin: 10px 0;
              &:hover {
                background-color: red;
                cursor: pointer;
              }
            `}>
              {movie.vote_average} 
            </div>
            <div className='header-info'> 
              <h3 className={css`
                font-size: 1.1em;
                font-weight: 400;
                font-style: italic;
                opacity: 0.7;
              `}>{movie.tagline}</h3>
              <h3>Обзор</h3>
              <p>{movie.overview}</p>
              <div className='actor'>

              </div>
            </div>
          </div>
         </div> : ''
       }
    </div>
  </div>
  
  );
  return(
    <div >
      <SmallDropdown />
      <div>
        {listItems}
      </div>
      <Starring/>
    </div>
  );
}
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history
    };
  }, [params, match, location, history]);
}