import React from 'react';  // UI function JSX
import ReactDOM from 'react-dom';
// 入口文件
import CommentApp from './CommentApp';  //模块机制
import './index.css';   // 像js 引入
// 跟link标签 saybyebye

ReactDOM.render(
  <CommentApp/>,
  // 真实DOM
  document.getElementById('root')
);