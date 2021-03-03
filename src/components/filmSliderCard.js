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
import pic from "./img/1.jpg";
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Rating } from 'semantic-ui-react';
const H5 = styled.h5`
  margin: 0;
`
export default function FilmsSliderCard(){
  return (
      <div className="one-card">
        <img src={pic} className="poster"></img>
        <H5>название</H5>
        <Rating maxRating={5} defaultRating={3} icon='star' size='massive' className={css` outline:none;`}/>
      </div>  
  );
}