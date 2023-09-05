import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import App1 from './App1';
import App2 from './App2';
import Home from './components/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1/> */}
    <App2/>
    {/* <Home/> */}
  </React.StrictMode>
);

