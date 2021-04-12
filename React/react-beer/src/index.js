import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 添加路由 react 组件
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Search from './components/Search';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/search/:searchTerm" component={Main}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
