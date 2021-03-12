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
import queryString from 'query-string';
import { useMemo } from "react";
import MovieCredits from "./movieCredits"
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const H2 = styled.h2`
  font-size: 36px;
  font-weight:700;
  &>span {
    opacity: 0.8;
    font-weight: 400;
  }
`
export default function PersonalPagePeople(){
  const router = useRouter();
  const [person, setPerson] = useState([]);
  const person_id = +router.query.id;
  const FEATURE_API = `https://api.themoviedb.org/3/person/${person_id}?api_key=c35b372cfa1b3f13b4f773b276d1de6e&language=ru`;
  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
      })
  })
  const listItems = (
    <div>
    {person.id === person_id ? <div className={css`
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          text-align: left;
          display: flex;
          padding: 50px 0; 
          justify-content: space-between;
        `}>
      <div className='poster'>
        <img src={IMG_API+person.profile_path } alt={person.title}  className={css`
         width:300px;
         border-radius: 10px;
         margin-right: 40px;
        `}></img>
        <div className='personal-information'>
          <h3>Персональная информация</h3>
          <section>
            <p>
              <strong>Известность за</strong><br/> {person.known_for_department}
            </p>
            <p>
             <strong>Пол</strong><br/>{person.gender === 1? 'Женский':'Мужской'}
            </p>
            <p>
              <strong>Дата рождения</strong><br/> {person.birthday}
            </p>
            <p>
              <strong>Место рождения</strong><br/> {person.place_of_birth}
            </p>
            <p>
              <strong>Также известность как</strong><br/><ul className={css`
                list-style-type: none;
                padding: 0;
                margin: 0;
              `}>{person.also_known_as.map((name)=> <li className={css`margin-top:5px;`}>{name}</li>)}</ul>
            </p>
          </section>
        </div>
      </div>
      <div>
        <h1>{person.name}</h1>
        <h4>Биография</h4>
          <p className={css`white-space: break-spaces;`}>
          {person.biography}
          </p>  
          <MovieCredits person_id={person_id}/>
      </div>   
    </div> 
    : ''}   
    </div>
  );
  return (
    <div>
      <SmallDropdown/>
      <div>{listItems}</div>
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