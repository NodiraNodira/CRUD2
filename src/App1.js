import React,{Component} from "react";
import { users } from "./mock";

export default class App1 extends Component {
    render(){
        return (
          <div>
            {
                users.map((value)=>{
                    return(
                        <div key={value.id}>
                            {value.users}
                            
                        </div>
                    )
                })
            }
            
          </div>
        )
      }
    }
    