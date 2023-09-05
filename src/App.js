import React,{Component} from "react";
//import { users } from "./mock";

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
      favouriteColor:'red'
    }
    //console.log("Constructor is running");
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({favouriteColor:'yellow'})
    },2000)

  }
  
  // shouldComponentUpdate(){
  //   return true
  // }

  componentDidUpdate(){
    document.getElementById("myDiv").innerHTML = 'Div value:'+this.state.favouriteColor;
  }

  render(){
    //console.log('Render is running');

    // const onClick=()=>{
    //   this.setState({favouriteColor:'blue'})
    // }


    return (
      <div>
        <h1>My favourite color is:{this.state.favouriteColor}</h1>
        {/* <button onClick={onClick} >Change color</button> */}
        <div id="myDiv" ></div>
      </div>
    )
  }
}
