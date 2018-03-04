import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from 'react-router-dom';
import Hotfilms from '../style/Hotfilms.css';


class HotFilms extends Component{
  constructor(){
    super();
    this.state={
      hot:[],
    }
    this.BtnHotFilms= this.BtnHotFilms.bind(this);
  }
  BtnHotFilms(id){
    this.props.history.push('/Detail/'+id)
    console.log(id)
  }
  componentDidMount(){
    axios.get('/v4/api/film/now-playing?page=1&count=7')
    .then((res)=>{
      console.log(res.data.data.films)
      this.setState({
        hot:res.data.data.films
      })
    })
  }
  render(){
    var that = this;
    return(
      <div>
        <div className="head"></div>
        <ul className="hot-box">
        {
          this.state.hot.map(function(item,index){
            return(
              <li className="hot-list" key={item.name} onClick={()=>that.BtnHotFilms(item.id)}>
                <div className="hot-img">
                  <img src={item.poster.origin} />
                </div>
                <div className="hot-intor">
                  <div className="hot-name">
                    <p>{item.name}</p>
                    <i> ></i>
                    <span>{item.grade}</span> 
                  </div>
                  <p className="introduce">{item.intro}</p>
                  <div className="hot-name hot-nub">
                    <p>{item.cinemaCount}家电影院上映</p>
                    <span>{item.watchCount}人购票</span>
                  </div>
                </div>
              </li>
              )
          })
        }
        </ul>
      </div>
      )
  }
}
export default withRouter(HotFilms)
