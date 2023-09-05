import React,{Component} from "react";
import './style.css';
// import city from '../../assets/imgs/city-one.jpg';
// import icon from '../../assets/icons/stars.svg';
//import { cardInfo } from "../../mock";


export default class Card extends Component {

  render(){

    const {data}= this.props;
    console.log(data);
    return (
      <div className="container">
        <img className="img" src={data.img} alt="city" />
        <h4 className="header">Enjoy Beauty place in Bali city</h4>
        <div className="icon-wrapper">
            <div className="items">
                <img src={data.icon1} alt="icon" />
                <p>{data.day}</p>
            </div>
            <div className="items">
                <img src={data.icon3} alt="icon" />
                <p>{data.person}</p>
            </div>
            <div className="items">
                <img src={data.icon2} alt="icon" />
                <p>{data.rating}{data.review}</p>
            </div>
        </div>
        <div className="icon-wrapper">
        <div className="items">
                <img src={data.icon} alt="icon" />
                <p>{data.location}</p>
        </div>
        <div className="items">
          <p></p>
        </div>
        <div className="items1">
          <b>{data.price}</b>
        </div>
        </div>
      </div>

      
      
    )
  }
}