import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import pic from "../img/scarlet.jpg";

const H5 = styled.h5`
  margin: 0;
`
export default function ItemPeople(){
  return(
    <div className={css`
      box-shadow: 0 1px 15px 0 rgb(34 36 38 / 15%);
      border: 2px solid #000;
      `}>
      <img src={pic} alt="human"></img>
      <H5>Scarlett Johansson</H5>
      <p>Description</p>
    </div>
  );
}
  