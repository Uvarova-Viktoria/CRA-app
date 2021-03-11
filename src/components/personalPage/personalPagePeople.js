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
  const person_id = +router.pathname.slice(-3);
  console.log('person id = '+ person_id);
  const FEATURE_API = `https://api.themoviedb.org/3/person/${person_id}?api_key=c35b372cfa1b3f13b4f773b276d1de6e`;
  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
        //console.log(data);
      })
  })
  const listItems = (
    <div>
    {person.id === person_id ? <div>
      <div className='poster'>
            <img src={IMG_API+person.profile_path } alt={person.title}  className={css`width:300px;`}></img>
         </div>
      <h1>{person.name}</h1>
      <h4>Биография</h4>
      <p>
        {person.biography}
      </p>
    
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