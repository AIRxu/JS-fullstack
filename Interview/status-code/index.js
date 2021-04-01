const http = require('http');

// http 协议
http.createServer((req, res) => {
  if (req.url == './newpage') {
      res.writeHead(204); //a 不跳转
    return;
  }
  // http 头，体
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  // OSI七层模型
  res.write('hello world');
  res.end(`
    <html>
      <head></head>
      <body>
        <a href="http://www.baidu.com">去百度</a>
        <a href="/newpage">去新的页面</a>
      </body>
    </html>
  `)
})
.listen(3010)