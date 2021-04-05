const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // 每次都重新请求同一个文件是不是很浪费资源
  // 可以保持连接，这是一个选择
  // 有三个问题
  // 怎么区分第一次上传文件和其他次上传文件？
  // 如何知道文件是否存在？
  // 如何知道文件是不是发生了改动？
  let stat = fs.statSync('./a.txt');
  res.setHeader('Last-Modified', stat.mtime);
  fs.createReadStream('./a.txt').pipe(res);
  res.end('hello');
})
.listen(8080)