import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 可变
let obj = {}
let obj1 = obj;

obj1.name = 123;
console.log(obj1,obj);

// 不可变
let newObj = {}
let obj3 = {
  ...newObj
}
obj3.name = 123;  // 拷贝之后的修改就没有副作用了
console.log(obj3,newObj)
// 组件 state
// redux state

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
