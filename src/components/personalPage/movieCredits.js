import React, { useEffect, useState } from "react";
import FilmsSliderCard from "../filmSliderCard";
import { css } from '@emotion/css';

export default function MovieCredits({person_id}){
  const FEATURE_API =`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=c35b372cfa1b3f13b4f773b276d1de6e&language=ru`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.cast);
      })
  })
  const listItems = movie.map((item) =>
    <FilmsSliderCard key={item.id} {...item} picSize='130px'/>
  );
  return (
    <div>
      <h3>Фильмы</h3>
      <div className={css`
        display: flex;
        align-items: baseline;
        overflow-x: scroll;
        width: 900px;
        &>.one-card {
          margin-right:20px;
        }
        & .film-title {
          font-size: 12px;
          margin: 0;
          font-weight:400;
        }
        & .vote-average {
          display: none;
        }
        ::-webkit-scrollbar {
            
            background-color: transperent;
            border-radius:2px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #01b4e4;
            width: 40%;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #0d253f;
        }
      `}>{listItems}</div>
  </div>
  );
}