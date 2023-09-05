import React from "react";
import {Container,Paragraph,MainImg,UserInput} from './style';
//import Places from './components/Places';
//import Search from "./components/Search"; 

const Home = ()=>{
    return(
        <Container>
            <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
            <MainImg />
            <UserInput type="text" placeholder="Enter your name"/>
        </Container>
    )
}

export default Home