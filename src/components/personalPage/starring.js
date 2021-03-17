import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { css } from '@emotion/css';
const IMG_API = "https://image.tmdb.org/t/p/w1280";
export default function Starring(props){
  const filmID = props.filmID;
  const FEATURE_API = `https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=c35b372cfa1b3f13b4f773b276d1de6e`;
  const [actor, setActor]  = useState([]);
  useEffect(() => {
    fetch(FEATURE_API)
      .then((res) => res.json())
      .then((data) => {
        setActor(data.cast);
        //console.log(data.cast);
      })
  })
  const listActor = actor.map((item) =>
    <div className="person-card">
      <Link Link to={'/person/'+item.id} ><img src={IMG_API + item.profile_path} alt={item.name}  className = {css`
        height: 250px; 
      `}/></Link>
      <h3 className={css`margin: 0 auto;`}>{item.name}</h3>
      <h5 className={css`margin: 0 auto; font-weight: 300;`}>{item.character}</h5>
    </div>

  )
  /*
  border-right: 5px solid transparent;
    background-image: linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%);
  */
  return (
    <div className={css`
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding-bottom: 50px;
      text-align: center;
      &>h1{
        margin: 30px 0;
      }
    `}>
      <h1>В главных ролях</h1>
      <div className={css`
        display: flex;
        overflow-x: scroll;
        &>.person-card{
          margin-right:20px;
        }
      `}>
        {listActor}
      </div>
    </div>
  );
}