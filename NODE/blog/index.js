const express = require('express');
const data = require('./db.json');
// koa 是 express 的小孩
const app = express();

app.get('/', (req, res) => {
  // Content-Type: application/json; charset=utf-8
  // 原生node写法 res.end(JSON.stringify(data))
  res.json(data);
})

// URL+谓语动词可以表达对 资源做什么操作

app.get('/posts/:id', (req, res) => {
  // https://www.baidu.com/posts/:id?a=1
  // 协议+域名+路径+params+查询字符串
  // console.log(req.params.id);
  let id = req.params.id;
  // fliter数组，回调循环调用返回为真就被选出来，否则过滤掉
  let post = data.posts.filter(post => post.id = id);
  res.json(post);
})

app.listen(8081);