import React, { Component } from 'react';
import ComponentInput from './CommentInput';
import ComponentList from './CommentList';
import './index.css'
// 解构
// let { a } = {a:1, b:2, c:3}

class CommentApp extends Component {
  render() {  //接口
    return(
      <div>
        <ComponentInput/>
        <ComponentList/>
      </div>
    )
  }
}

// function CommentApp() {
//   return (
//     <div className="wrapper">
//       <CommentInput />
//       <CommentList />
//     </div>
//   )
// }

export default CommentApp;