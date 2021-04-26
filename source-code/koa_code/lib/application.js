const http = require('http');


class MyKoa {
  constructor () {
    console.log('手写实现koa');
    this.fn = null;
  }
  // listen (port, fn)
  // 不要传一个一个的形参，用es6的写法如何？
  
  listen (...args) {
    // rest 和 spread 收集运算符和展开运算符 ...
    // console.log(...args);
    // 自己来定义MyKoa类里面的方法，使用http的createServer来实现
    let server = http.createServer(this.fn);
    // 在createServer的时候可以调用 use传进来的参数
    server.listen(...args);
  }
  use (fn) {
    this.fn = fn;
  }
}

module.exports = MyKoa;