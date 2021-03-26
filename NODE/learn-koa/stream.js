const fs = require('fs');
const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const app = new Koa();

// 引入koa-static的版本
const main = ctx => {
  if (ctx.request.path == '/') {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('templete.html');
  } else if (ctx.request.path == '/15CNN.png') {
    ctx.response.type = 'img';
    ctx.response.body = fs.createReadStream('15CNN.png')
  } else if (ctx.request.path == 'css') {
    ctx.response.type = '/common.css';
    ctx.response.body = fs.createReadStream('common.css');
  } else if (ctx.request.path == './common.js') {
    ctx.response.type = 'js';
    ctx.response.body = fs.createReadStream('/common.js');
  } 
}

// 只处理图片和HTML的版本
// const main = ctx => {
//   if (ctx.request.path == '/15CNN.png') {
//     ctx.response.type = 'img';
//     ctx.response.body = fs.createReadStream('./15CNN.png');
//   } else {
//     ctx.response.type = 'html'; // 响应头 png css js
//     ctx.response.body = fs.createReadStream('./template.html');
//   } 
// }
// 手写处理所有类型版本
// const main = ctx => {
//   const url = ctx.request.path == '/'? './template.html' : ctx.request.path;
//   const fileType = path.extname(url).slice(1);
//   // console.log(fileType);
//   if (fileType == 'html') {
//     ctx.response.type = 'html';
//     ctx.response.body = fs.createReadStream('templete.html');
//   } else if (fileType == 'png') {
//     ctx.response.type = 'img';
//     ctx.response.body = fs.createReadStream('15CNN.png')
//   } else if (fileType == 'css') {
//     ctx.response.type = 'css';
//     ctx.response.body = fs.createReadStream('common.css');
//   } else if (fileType == 'js') {
//     ctx.response.type = 'js';
//     ctx.response.body = fs.createReadStream('common.js');
//   }
// }

// const main = ctx => {
//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href = "/">Index Page</a>';
//   } else {
//     ctx.response.body = 'Hello World!';
//   }
// }

// 使用koa-static
app.use(koaStatic('./'));
app.use(main);
app.listen(8080);