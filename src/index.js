import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import books from './chap03/books';
// import ForList from './chap03/ForList';
// import ForFilter from './chap03/ForFilter';
// import ForSort from './chap03/ForSort';
// import StyledPanel from './chap03/StyledPanel';
// import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';
import reportWebVitals from './reportWebVitals';
// import StateParent from './chap03/StateParent';
// import EventMouse from './chap03/EventMouse';
import EventObj from './chap03/EventObj';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventObj />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
