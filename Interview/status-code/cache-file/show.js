const http = require('http');
const fs = require('fs');
const users = require('./users.json');
console.log(users);

let server = http.createServer( (req, res) => {
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.createReadStream('./index.html').pipe(res);
  } else if (req.url == '/users') {
    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    res.end(JSON.stringify(users));
  }
})

server.listen(8082)