import React from "react";

import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Rating } from 'semantic-ui-react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const FilmsSliderCard = ({ title, poster_path, overview, vote_average}) =>(
  <div className="one-card">
    <a href="/onePage"><img src={IMG_API + poster_path} alt={title}  className = {css`
      width: 250px; 
    `}/></a>
    <div>
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>

  </div>
);

export default FilmsSliderCard;
