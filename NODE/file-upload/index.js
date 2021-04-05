const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // 处理文件
  if(req.url === './files' && req.method.toLowerCase() === 'post') {
    parseFile(req, res);
  } else {
    fs.createReadStream('./index.html').pipe(res);
  }
})
.listen(9090, () => {
  console.log('9090');
})

function parseFile(req, res) {
  req.setEncoding('binary');
  let body = '';
  let boundary = req.headers['content-type'].split('boundary=')[1];
  res.on('data', (chunk) => {
    body += chunk;
  })
  res.on('end', () => {
    let lines = body.split('Content-Type: image/jpg\r\n\r\n')
    let end = lines[1].indexOf('--' + boundary + '--') - 2;
    let binary = lines[1].substring(0, end);
    fs.writeFile('./upload.jpg', binary, {encoding: 'binary'}, (err) => {
      if (!err) {
        res.end('ok');
      } else {
        res.end(err.toString());
      }
    })
  })
}