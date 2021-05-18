##  状态

```js
let isLogin = false;  //state
// login-component
isLogin = true;
// logout-component
isLogin = false;
```

## redux
设计一套修改我们 state的（单向）流程
在我们修改变量的过程中加入了一些环节，状态的改变是有轨迹可以追踪的
在这个过程中借助了一些函数式编程的思想

