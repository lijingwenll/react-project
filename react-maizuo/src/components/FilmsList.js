import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from 'react-router-dom';
import HotFilms from './HotFilms';
import SoonFilms from './SoonFilms';
import Detail from './Detail';
import Flimslist from '../style/Flimslist.css';


export default class FlimsList extends Component{
  render(){
    return(
      <Router>
        <div className="flimslist-swiper">
          <div className="flimslist-box">
            <NavLink exact className="flimslist-left" activeClassName="active" activeStyle={{ borderbottom: '4px solid #fe6e00',color: '#fe6e00'
   }} to="/FilmsList/HotFilms">正在热映</NavLink>
            <NavLink  className="flimslist-right" activeClassName="active" to="/FilmsList/SoonFilms">即将上映</NavLink>
            <HotFilms></HotFilms>
          <Route exact path="/FilmsList/HotFilms" component={HotFilms}/>  
          <Route path="/FilmsList/SoonFilms" component={SoonFilms}/>
          </div>
        </div>

      </Router>
      )
  }
}   
