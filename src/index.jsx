import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import books from './chap03/books';
import ForList from './chap03/ForList';
import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';
import StyledPanel from './chap03/StyledPanel';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventBasic type="time" />
    <StateBasic init={0} />
    {/* <ForList src={books} /> */}
    <ForSort src={books} />
    <StyledPanel>
      <p>メンバー募集中！</p>
      <p>ようこそ、WINGSプロジェクトへ！！</p>
    </StyledPanel>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
