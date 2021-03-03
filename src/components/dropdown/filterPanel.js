import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import {Dropdown, Form, Menu, Checkbox} from 'semantic-ui-react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const optionsSort = [
  { key: 1, text: 'Популярности (возрастание)', value: 1 },
  { key: 2, text: 'Популярности (убывание)', value: 2 },
  { key: 3, text: 'Рейтингу (возрастание)', value: 3 },
  { key: 4, text: 'Рейтингу (убывание)', value: 4 },
]
const viewability = ['Искать все возможности просмотра?','Поточное','Бесплатно','Реклама','Прокат','Продажи' ];
const releaseDates = ['Искать все релизы?','Искать по всем странам?','Премьерный','Театральный (ограниченно)','Цифровой','Физический', 'ТВ' ];
const genres = ['боевик', 'комедия', 'вестрн','военный','драма','мультфильм','семейный']
function FilterBox(props) {
  const items = props.names;
  const listItems = items.map((item)=>
    <Checkbox label= {item} className={css`width: 100%;`}/>
  )
  return (
    <div>{listItems}</div>
  );
}

class FilterPanel extends React.Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  render (){
    return(
      <div className={css`
        background-color: white;
        margin-right: 20px;
        padding: 20px;
      `}>
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
                   <FilterBox names={viewability}/>
                  </div>
                  <div className='filter-box'>
                    <h3>Даты выхода</h3>
                    <FilterBox names={releaseDates}/>
                  </div>
                  <div className ='filter-box'>
                    <h3>Жанры:</h3>
                    <FilterBox names = {genres}/>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}
export default FilterPanel;