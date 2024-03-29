import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
//import Users from './containers/Users'
import {GlobalStyle} from "./GlobalStyle";

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

