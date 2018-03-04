import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import  '../style/Head.css'; 
import  '../style/iconfont/iconfont.css'; 
import Home from './Home';
import FilmsList from './FilmsList';
import Cinema from './Cinema';
import Shop from './Shop';
import Mine from './Mine';
import Card from './Card';
import Detail from './Detail';

 
export default class Header extends Component{
  constructor(){
    super();
    this.state={
      ShowFlag:false,
    }
    this.BtnMenu = this.BtnMenu.bind(this);
  }
  BtnMenu(){
    this.setState({
      ShowFlag:!this.state.ShowFlag,
    })
  }
  
  render(){
    var MR = (<div className="right-menu">
                <Link className="MenuMap" to="/">
                  <div className="MenuLeft">首页</div>
                  <i className="MenuRight iconfont icon-xiangyou"></i>
                </Link>
                <Link className="MenuMap" to="/FilmsList">
                  <div className="MenuLeft">影片</div>
                  <i className="MenuRight iconfont icon-xiangyou"></i>
                </Link>
                <Link className="MenuMap" to="/Cinema">
                  <div className="MenuLeft">影院</div>
                  <i className="MenuRight iconfont icon-xiangyou"></i>
                </Link>
                <Link className="MenuMap" to="/Shop">
                  <div className="MenuLeft">商城</div>
                  <i className="MenuRight iconfont icon-xiangyou"></i>
                </Link>
                <Link className="MenuMap" to="/Mine">
                  <div className="MenuLeft">我的</div>
                  <i className="MenuRight iconfont icon-xiangyou"></i>
                </Link>
                <Link className="MenuMap" to="/Card">
                  <div className="MenuLeft">卖座卡</div>
                  <i className="MenuRight iconfont icon-xiangyou"></i>
                </Link>
              </div>);
    if(!this.state.ShowFlag){
      MR=null
    }

    return(
      <Router>
        <div>
          <div className="Header-top">
            <div className="header-left" onClick={this.BtnMenu}>
              <i className="header-flims iconfont icon-shouqianniuicon"></i>
              <p className="flims">卖座电影</p>
              <ReactCSSTransitionGroup
                transitionName="animation"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
              {MR}
              </ReactCSSTransitionGroup>
            </div>
            <div className="header-right">
              <i className="header-people iconfont icon-gerenyonghutouxiang"></i>
            </div>
            <div className="header-center">
              <p className="city">北京</p>
              <i className="header-city iconfont icon-xialasanjiao"></i>
            </div>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/FilmsList" component={FilmsList}/>
          <Route path="/Cinema" component={Cinema}/>
          <Route path="/Shop" component={Shop}/>
          <Route path="/Mine" component={Mine}/>
          <Route path="/Card" component={Card}/>
          <Route path="/Detail/:id" component={Detail}/>  

        </div>
      </Router>
      )
  }

}