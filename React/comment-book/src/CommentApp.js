import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'


class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []  /* 数据状态 父组件来管理  数据具有一致性 */
    }
  }
  componentWillMount () {
    this._loadComments()
  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments  // old state
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }
  handleDeleteComment (index) {
    const comments = this.state.comments
    // splice是用来删除或者替换来改变数组的，第一个参数是指定位置，第二个参数是删除元素的个数
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  render() {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          comments={this.state.comments}
        />
      </div>
    )
  }
}

export default CommentApp;