import React, { Component } from 'react';
import Comment from './Comment';

class ComponentList extends Component {
  render() {
    let { comments } = this.props;
    console.log(this.props,"|||||||||");
    return (
      <div>
        {comments.map((comment, i) => <Comment comment={comment} key={i}/>)}
      </div>
    )
  }
}

export default ComponentList;