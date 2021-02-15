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
    <from className="form-search">
      <input type="text" placeholder="Найти фильм, сериал, персону..."/>
      <input type="submit" value="Search" className="btn-search"/>
    </from>
  );
}