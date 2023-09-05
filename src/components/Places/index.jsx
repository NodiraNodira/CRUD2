import React,{Component} from "react";
import Card from "../Card";
import {cardInfo} from '../../mock';
import './style.css';

export default class Places extends Component {


  render(){
    return (
      <div className="wrapper"  >
        {
          cardInfo.map((value)=>{
            return (
              <Card data={value}/>
            )
          })
        }
      </div>
    )
  }
}