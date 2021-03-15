import React, { useEffect, useState } from "react";
import { css } from '@emotion/css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";

import FilmsSliderCard from "./filmSliderCard";
//const FEATURE_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c35b372cfa1b3f13b4f773b276d1de6e";

export default function FilmsSlider(props) {
  const typePath = props.typePath; 
  const picSize = props.picSize;
  const FEATURE_API =`https://api.themoviedb.org/3${typePath}?api_key=c35b372cfa1b3f13b4f773b276d1de6e`;

  const [movies,setMovie]  = useState([]);

  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results);
      })
  })
  const listItems = movies.map((movie) =>
    <FilmsSliderCard key={movie.id} {...movie} picSize='200px'/>
  );
  return (<div className={css`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `}>
  {listItems}
  <Switch>
    <Route exact path="/now_playing"></Route>
    </Switch>
  </div>);
}