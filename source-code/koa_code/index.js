const MyKoa = require('./lib/application');
const app = new MyKoa();

// 手写koa

app.use((req, res) => {
  res.end('hello world!')
})
app.listen(3002, () => {
  console.log('你的服务在3002端口启动了！');
});