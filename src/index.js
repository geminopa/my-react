import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventBasic type="time" />
    <StateBasic init={0} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
