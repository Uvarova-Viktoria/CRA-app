import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import pic from "./img/rectangle.png";
import FilmsSliderCard from "./filmSliderCard";

export default function ModalExample() {
  return (
    <Router>
      <h1>Popular Films:</h1>
      <FilmsSlider/>
    </Router>
  );
}
function FilmsSlider() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <FilmsSliderCard/>
  );
  return (<div className="films-slider">{listItems}</div>);
}