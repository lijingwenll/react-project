import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import '../style/Detail.css';


export default class Detail extends Component{
   constructor(){
    super();
    this.state={
      intro:[],
      name:[],
      tostar:[],
      language:[],
      chinese:[],
      story:[],
      detailimg:[],
    }
  }

   componentDidMount() {
    axios.get(`/v4/api/film/${this.props.match.params.id}?__t=1520040229056`)
    .then((res)=>{
      console.log(res.data)
      this.setState({
        intro:res.data.data.film.synopsis,
        name:res.data.data.film.director,
        tostar:res.data.data.film.actors,
        language:res.data.data.film.nation,
        chinese:res.data.data.film.language,
        story:res.data.data.film.category,
        detailimg:res.data.data.film.cover,
      })
    })
  }

  render(){
    return(
      <div>
        <div>
          <div className="Detail-img">
            <img src={this.state.detailimg.origin}/>
            </div>
            <div className="tip">
              <div className="sug"></div>
              <p>影片简介</p>
            </div>
            <div className="intro">
              <div className="zhi">
                <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 : {this.state.name}</p>
                <p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演 :&nbsp;&nbsp;
                  {
                    this.state.tostar.map(function(item,index){
                      return(
                          <span key={item.name}>
                            {item.name} |&nbsp;&nbsp; 
                          </span>
                        )
                    })
                  }   
                </p>
                <p>地区语言 : {this.state.language} ({this.state.chinese})</p>
                <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型 :  {this.state.story}</p>
                <p>上映日期 : 3月2日上映 </p>
              </div>
              <div className="long">
                <p>{this.state.intro}</p>
              </div>
          </div>
        </div>
      <div className="BtnDetail">立即购票</div>
      </div>
      )
  }
}