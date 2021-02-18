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
import {Dropdown, Form, Menu, Checkbox} from 'semantic-ui-react';
const optionsSort = [
   { key: 1, text: 'Популярности (возрастание)', value: 1 },
   { key: 2, text: 'Популярности (убывание)', value: 2 },
   { key: 3, text: 'Рейтингу (возрастание)', value: 3 },
   { key: 4, text: 'Рейтингу (убывание)', value: 4 },
]

class Movie extends React.Component {
  /*
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
  }*/
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  render (){
    return(
      <div className="wrapper">
        <h2>Фильмы</h2>
        <div className="content">
          <div className="sort_article">
            <div className="filter_panel">
              <div className="filter_panel_name">Сортировать по:</div>
              <div className="filter">
              <Menu compact className="icon-sort">
                    <Dropdown text = 'Популярности (возрастание)'  options={optionsSort} simple item />
              </Menu> 
                
               </div>
            </div>
            <div className="filter_panel">
              <div className="filter_panel_name">Фильтры:</div>
              <div className="filter">
                <Form>
                  <Form.Field>
                    Показать мне:
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label='Все'
                      name='checkboxRadioGroup'
                      value='all'
                      checked={this.state.value === 'all'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label='Фильмы, которые я не видел'
                      name='checkboxRadioGroup'
                      value='dontSee'
                      checked={this.state.value === 'dontSee'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label='Просмотренные фильмы'
                      name='checkboxRadioGroup'
                      value='see'
                      checked={this.state.value === 'see'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Form>
                <div className='filter-box'>
                  <h3>Возможность просмотра</h3>
                  <Checkbox label='Искать все возможности просмотра?' />
                  <Checkbox label='Поточное' />
                  <Checkbox label='Бесплатно' />
                  <Checkbox label='Реклама' />
                  <Checkbox label='Прокат' />
                  <Checkbox label=' Продажи' />
                </div>
                <div className='filter-box'>
                  <h3>Даты выхода</h3>
                  <Checkbox label='Искать все релизы?' />
                  <Checkbox label='Искать по всем странам?' />
                  <Checkbox label='Премьерный' />
                  <Checkbox label='Театральный (ограниченно)' />
                  <Checkbox label='Цифровой' />
                  <Checkbox label=' Физический' />
                  <Checkbox label=' ТВ' />
                </div>
                <div className ='filter-box'>
                  <h3>Жанры:</h3>
                </div>
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