const http = require('http');
const fs = require('fs')

const server = http.createServer(function(req, res) {
  // console.log(req, req.url);
  // 这里的req.url就是前端发来的req请求中地址栏url部分
  // GET 参数放在 url里面
  // POST 参数放在实体部分
  if (req.url === '/') {
    // html
    const html = fs.readFileSync('./index.html', 'utf-8')
    res.end(html);
  } else if (req.url === '/getPosts') {
    // 没有给出返回呢
    let posts = [
      { title:'js', star:1000 },
      { title:'php', star:2000 }
    ]
    res.end(JSON.stringify(posts));
  }
  // res.end('hello server')
})

server.listen(8080, function() {
  console.log('server is running 8080');
})