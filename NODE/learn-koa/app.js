const http = require('http');
// web编程的基石是HTTP协议
http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf8'});
    res.end('首页');
  } else if(req.url === '/about') {
    res.end('about');
  }
  // res.end('Hello World!')
})
.listen(1314)