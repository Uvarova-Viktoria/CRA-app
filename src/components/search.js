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

export default function Search(){
  return(
    <form className="form-search">
      <input type="text" placeholder="Найти фильм, сериал, персону..." className="input_search"/>
      <input type="submit" value="Search" className="btn-search"/>
    </form>
  );
}