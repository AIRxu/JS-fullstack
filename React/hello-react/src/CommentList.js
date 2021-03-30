import React, { Component } from 'react';
import Comment from './Comment';

class ComponentList extends Component {
  render() {
    let { comments } = this.props;
    console.log(this.props,"|||||||||");
    // console.log(this.props);
    return (
      <div>
        { comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </div>
      // <div>
      //   {
      //     comments.map((comment, i) =>{
      //       return (
      //         <div key={i}>
      //           {comment.username}:{comment.content}
      //         </div>
      //       )
      //     })
      //   }
      // </div>
    )
  }
}

export default ComponentList;