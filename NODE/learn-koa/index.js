// 轻量级的web 开发框架， js node 50%
// js   一人打天下
const Koa = require('koa');   //请上koa
const app = new Koa(); // web server
const fs = require('fs');
// 启动一个服务  函数封装一个服务
// const func = ctx => {
//   console.log('func');
//   ctx.response.body = 'func';
// }

const main = ctx => {
  // console.log(ctx.request, '--------');
  // ctx.response.body = 'Hello World!';
  // req   response
  ctx.response.type = 'html'; //响应头
  // 分层，做网站，想做大一点的网站，代码就会多，分开去写代码，返回一个html文件（MVC View）
  // 协议  操作系统（node在内存， 文件系统在硬盘找到之后再读到内存里）  网络  数据库
  const html = fs.readFileSync('./template.html', 'utf-8');
  // fs.readFile('./template.html', 'utf-8', function (err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
      ctx.response.body = html;
  //   }
  // })
  // console.log(html);

  // ctx.response.body = `
  // <html>
  //   <head></head>
  //   <body>
  //     <h1>Hello World!</h1>
  //   </body>
  // </html>
  // `
}
// app.use
// app.use(func);

app.use(main);  //启动了一个服务，给访问者用，在用户request的时候才会调用

app.listen(3000);