const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // GET方式会在url上面携带一些信息
  // juejin.com/search?type=all&query=js
  // 后端会接收
  // 前端   type=all&query=js   会当做流传输  给后端
  // GET：数据是放在url上面传输的
  // POST：数据是放在body里面传输的
  const writeStream = fs.createWriteStream('./params.txt')
  req.pipe(writeStream);
  // console.log(req);
  res.end('ok');
})
.listen(8088, () => {
  console.log(8088);
})