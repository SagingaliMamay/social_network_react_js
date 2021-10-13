import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id:1,post:'You are super React Developer',likes:150},
  {id:2,post:"You are a really good learner",likes:15},
  {id:3,post:'I am quick learner',likes:180},
  {id:4,post:'Bla bla',likes:180},
  {id:5,post:'la la la ',likes:180}
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
