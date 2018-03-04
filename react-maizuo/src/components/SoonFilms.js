import React, { Component } from 'react';
import axios from 'axios';
import Hotfilms from '../style/Hotfilms.css';


export default class Home extends Component{
  constructor(){
    super();
    this.state={
      hot:[],
    }
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
    return(
      <div>
        <div className="head"></div>
        <ul className="hot-box">
        {
          this.state.hot.map(function(item,index){
            return(
              <li className="hot-list" key={item.name}>
                <div className="hot-img">
                  <img src={item.poster.origin} />
                </div>
                <div className="hot-intor">
                  <div className="hot-name">
                    <p>{item.name}</p>
                    <i> ></i>
                  </div>
                  <p className="introduce">{item.intro}</p>
                  <div className="hot-name hot-nub">
                    <p>{item.cinemaCount}家电影院上映</p>
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