import React from 'react';
import ReactDom from 'react-dom';
const { createStore, combineReducers } = require('redux');


// action:纯对象({}), type字段:用来区别action 常量，在整个应用内是唯一的
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-login-status');

let isLogin = false;
let posts = [];
// 状态要怎么定义呢
// 必须要把状态放到 reducer(纯函数)内
// createStore 经过 reducer 生成 store  状态默认值
// dispatch action 也要 reducer 生成 store  用户触发
// reducer 兼顾两者
// state 是上一次的状态
function loginReducer(state = isLogin, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      // state = !state;  // 不是将原来的值取反
      return !state    // 返回新的 state 不是修改原来的那个变量
    default:          //默认值
      return state
  }
}
function postsReducer(state = posts, action) {
  switch (action.type) {
    case POSTS_STATUS:
      return action.newPosts;
    default:
      return state
  }
}

const loginAction = {
  type: LOGIN_STATUS,
  a: 1
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a:1 }, { b:2 }]
}
// 分成了 login posts
// 接受一个
const rootReducer = combineReducers({
  login:loginReducer,
  posts:postsReducer
})
const store = createStore(rootReducer);
// mapStateToProps 对应 getState
// console.log(store);
console.log('now', store.getState());
// action -> reducer
// mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('----', store.getState());
// 调用dispatch就会去到 reducer 去哪个呢？
// 两个都会去到


// react-redux
// redux和react怎么结合

// 最原始的结合
class App extends React.Component {
  handleLogin = () => {
    store.dispatch(loginAction);
  }
  render() {
    return(
      <div>
        isLogin: { store.getState().login? '1': '0' }
        posts: { store.getState().posts.length }
        <button onClick={this.handleLogin}>切换登陆状态</button>
      </div>
    )
  }
}

function render() {
  ReactDom.render(<App />, document.getElementById('root'));
}

render();
// 订阅store，store内改变之后会通知回调函数重新渲染
store.subscribe( () => {
  render();
})
// 修改store之后，页面会重新渲染