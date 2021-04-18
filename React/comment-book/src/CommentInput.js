import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {  // 有什么用？？ 检验传递内容的类型
    onSubmit: PropTypes.func
  }
  constructor() {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  // 利用了不同的生命周期函数
  componentWillMount() {
    this._loadUsername()
  }
  componentDidMount () {
    this.textarea.focus()
  }
  _loadUsername() {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }
  _saveUsername(username) {
    localStorage.setItem('username', username)
  }

  handleUsernameBlur(event) {
    // console.log(event.target.value);
    // 下划线表示私有方法
    this._saveUsername(event.target.value)
  }

  handleUsernameChange(event) {
    // console.log(event.target.value);
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit() {
    if (this.props.onSubmit) {  //不能一根筋，小心驶得万年船，先判断一下是否有this.props.onSubmit，有的话再继续
      this.props.onSubmit({   // 提升鲁棒性
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({ content: '' })
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;