import React from "react";
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

export default function ModalExample() {
  return (
    <Router>
      <FilmsSlider/>
    </Router>
  );
}
function FilmsSlider() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
  const listItems = numbers.map((number) =>
    <FilmsSliderCard/>
  );
  return (<div className={css`
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `}>{listItems}</div>);
}