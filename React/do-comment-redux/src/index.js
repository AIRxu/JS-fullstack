import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from './containers/CommentApp';
import CommentsReducer from './reducers/Comments';
// 数据放到仓库里，和组件没有依赖关系

// 仓库
const store = createStore(CommentsReducer);

ReactDOM.render(
  <Provider store = {store} >
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)