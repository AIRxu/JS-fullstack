import React, { Component } from 'react';
import ComponentInput from './CommentInput';
import ComponentList from './CommentList';
import './index.css'
// 解构
// let { a } = {a:1, b:2, c:3}

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [{
        username: '诩神',
        content: '今天有压力了'
      }, {
        username: '诩神1',
        content: '今天有压力了111'
      }]
    }
  }
  render() {  //接口
    const { comments } = this.state;
    return (
      <div className="wrapper">
        {/* onSubmit  事件函数 */}
        <ComponentInput props onSubmit={this.handleSubmitComment.bind(this)} />
        <ComponentList comments={ comments } />
      </div>
    )
  }

  handleSubmitComment(comment) {
    this.setState({
      comments:[comment, ...this.state.comments]  // ... 展开运算符
    })

  }
}


export default CommentApp;