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
    // 这里就不能用this.props了，CommentApp的父元素是root，不需要做什么了，想要数据得自己动手
    // 子元素的输入值已经返回了，就在comment里面
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
    // console.log(comment,'----------');
    this.setState({
      comments:[comment, ...this.state.comments]  // ... 展开运算符
    })
    // let { comments } = this.state;
    // comments.unshift(comment);
    // // console.log(comments);
    // // 前面是key，后面是更新后的comments数据
    // this.setState({
    //   comments:comments
    // })
  }
}


export default CommentApp;