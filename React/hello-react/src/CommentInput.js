import React, { Component } from 'react';

// 做表单，搭积木的做法，分工
// 天下无难做的应用，分成一个个组件慢慢做

class ComponentInput extends Component {
  constructor() { //构造函数
    super();  // 父类的构造函数先执行一下
    this.state = {    //状态  react下一个玄学
      username:'',
      content:''
    }
  }

  render() {
    // react jsx {js动态区域}
    // 请大家尝试使用解构的方法，从this.state结出来 username content两个量
    let {username, content} = this.state;   //结构
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input type="text" value={username} 
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea value={content}
            onChange={this.handleContentChange.bind(this)}
            ></textarea>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }

  handleUsernameChange(event) {
    console.log(event);
    this.setState({
      username:event.target.value
    })
  }
  handleContentChange(event) {
    this.setState({
      content:event.target.value
    })
  }
  handleSubmit(event) {
    // console.log(this.state);
    const {username, content} = this.state;
    this.props.onSubmit({username, content});
    this.setState({
      content:''
    })
  }
}

export default ComponentInput;