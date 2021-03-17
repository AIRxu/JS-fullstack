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
    // 设置返回内容的类型为HTML
    // http状态码 2xx一般是成功
    // res.writeHead('200', {
    //   'Content-Type': 'text/html'
    // });
    // res.end('<h2>2222</h2>');
  } else if (req.url === '/getPosts') {
    // 没有给出返回呢
    let posts = [
      { title:'js', star:1000 },
      { title:'php', star:2000 }
    ]
    let str = '';
    // 分段得到
    req.on('data', function(chunk) {
      str += chunk;
    })
    // 接收完毕 str组装完成
    // 现在大部分前后端传输数据都是用 JSON格式
    // 'Content-Type', 'application/json'
    req.on('end', function() {
      console.log(JSON.parse(str));
    })
    res.end(JSON.stringify(posts));
    // 要把前端提交过来的数据进行解析
  }
  // res.end('hello server')
})

server.listen(8080, function() {
  console.log('server is running 8080');
})

// 区分 数据来源 如果是前端发的那就是request
// 如果是后端发出的就是response