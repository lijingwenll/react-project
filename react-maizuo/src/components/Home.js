import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import axios from "axios";
import FilmsList from './FilmsList';
import Detail from './Detail';
import '../style/FlimsHome.css';


export default class Home extends Component{
  constructor(){
    super();
    this.state={
      data: ['1', '2', '3'],
      imgHeight: 176,
      slideIndex: 0,
      list:[],
    }
    this.BtnFilmsList=this.BtnFilmsList.bind(this);
    this.BtnDetail=this.BtnDetail.bind(this);
  }

  BtnFilmsList(){
    this.props.history.push("/FilmsList")
  }
  BtnDetail(id){
    this.props.history.push("/Detail/"+id)
    console.log(id)
    console.log(this.props)
  }
  componentDidMount() {
    axios.get("/v4/api/billboard/home?__t=1519904877087")
    .then((res)=>{
      console.log(res)
      this.setState({
        data:res.data.data.billboards
      })
    })

    axios.get("/v4/api/film/now-playing?__t=1519954919361&page=1&count=5")
    .then((res)=>{
      console.log(res)
      this.setState({
        list:res.data.data.films
      })
      console.log(res.data.data.films)

    })
  }
  render(){
    var that = this;
    return(
        <div>
          <Carousel
            autoplay={true}
            dots={false}
            infinite
            selectedIndex={1}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.imageUrl}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
          <div className="home-list">
            <ul className="list-box">
            {
              this.state.list.map(function(item,index){
                return(
                  <li className="smail-box" key={item.name} onClick={()=>that.BtnDetail(item.id)}>
                    <div className="list-img">
                      <img src={item.cover.origin} alt="红海行动" />
                    </div>
                    <div className="list-red">
                      <div className="list-act">
                        <p>{item.name}</p>
                        <div className="list-buy">
                          <span>{item.cinemaCount}</span>
                          <span>家影院上映 </span>
                          <span>{item.watchCount}</span>
                          <span>人购票</span>
                        </div>
                      </div>
                      <div className="point">{item.grade}</div>
                    </div>
                  </li>
                  )
              })
            }
            </ul> 
            <div className="btn-box">
              <Link to="/FilmsList"></Link>
              <div className="btn-more"  onClick={this.BtnFilmsList}>更多热映电影</div>
            </div>
          </div>
        </div>
      )
  }
}