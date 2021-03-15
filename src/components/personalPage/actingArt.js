import React, { useEffect, useState } from "react";

import { css } from '@emotion/css';
import {
  Link,
} from "react-router-dom";

export default function ActingArt({person_id}){
  const FEATURE_API =`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=c35b372cfa1b3f13b4f773b276d1de6e&language=ru`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.cast);
      })
  })
  const listYear = [].concat(movie)
    .sort((a,b) => b.release_date > a.release_date ? 1 : -1)
    .map((item, i) =>
      <li className={css `
        margin-bottom: 5px;
       
      `}>{
          item.release_date !== undefined ?  item.release_date.slice(0,4) : ' '
        } - { <Link to={'/moviePage/'+item.id} className ={css`
          color: #000;
        `}>{item.title}</Link>}</li>
    );

  return(
    <div>
      <h3 className={css`
        padding-top: 20px;
      `}>Актёрское искусство</h3>
      <div>
        <ul className={css`
           box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
           padding: 30px 0 30px 50px;
        `}>
          {listYear}
        </ul>
      </div>
    </div>
  );
}