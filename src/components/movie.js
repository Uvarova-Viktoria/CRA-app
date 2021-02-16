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
import FilmSlider from "./filmSlider";


class Movie extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(event) {
    this.setState({value: event.target.value});
  }
   handleSubmit(event){
     console.log('test');
    alert('test = '+ this.state.value);
    event.preventDefault();
  }
  render (){
    return(
      <div className="wrapper">
        <h2>Фильмы</h2>
        <div className="content">
          <div className="sort_article">
            <div className="filter_panel">
              <div className="filter_panel_name">Сортировать</div>
              <div className="filter">
                <form onSubmit={this.handleSubmit}>
                  <label>
                  Сортировать результаты по:
                    <select value={this.state.value} onChange={this.handleChange}>
                      <option value="popular-increase">Популярности (возрастание)</option>
                      <option value="popular-decrease ">Популярности (убывание)</option>
                      <option value="rating-increase">Рейтингу (возрастание)</option>
                      <option value="rating-decrease">Рейтингу (убывание</option>
                    </select>
                  </label>
                  <input type="submit" value="Отправить" />
                </form>
               </div>
            </div>
            <div className="filter_panel">
              <div className="filter_panel_name">Фильтры:</div>
              <div className="filter">
                <h3>Показать мне:</h3>
              </div>
            </div>
          </div>
          <div className="films">
            
          </div>
        </div>
      </div>
    );
  }
  
}

export default Movie;