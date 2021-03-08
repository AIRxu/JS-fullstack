// 导入node http 模块（处理网络）
const http = require('http');
// 导入 fs fileSystem 文件系统 处理文件读写
const fs = require('fs');
// 1：前端通过ajax传输数据给后端，后端接收前端的请求
// 2：响应数据给前段
// baidu.com 请求之后服务器给你返回了一个HTML文件 -> 浏览器发现是html 渲染成页面 ->
// text/html 是 MIME
// 访问http:127.0.0.1:8081的时候 => 把 ajax.html 内容返回给前端

const server = http.createServer(function (req, res) {
  // 你想获取 前端给我的东西 就到req上面拿
  // 想要给到前端的东西就放到res上面
  console.log('当前正在请求', req.url);
  if(req.url.includes('search')) {
    // search 搜索功能
    // /      首页功能
    res.end(req.url.split('?')[1]);
    return;
  }
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  const file = fs.readFileSync('./ajax.html', { encoding: 'utf-8' })
  res.end(file);
  // '<h2>hello world 旅梦</h2>'
})
server.listen(8081, function () {
  console.log('server is runnning http:127.0.0.1:8081');
})