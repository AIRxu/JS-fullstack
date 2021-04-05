const http = require('http');
// const fs = require('fs');

let server = http.createServer( (req, res) => {
  let version = '11231';
  // If-None-Match
  // if (req.headers['If-None-Match']) {
  //   if (Number(req.headers['If-None-Match']) == version) {
  //     res.statusCode = 304;
  //     res.end();
  //     return
  //   } else {
  //     res.setHeader('Etag', version);
  //     res.end('hello world222');
  //     return
  //   }
  // }
  if (req.headers['if-none-match']) {
    // console.log(req.headers['if-none-match']);
    if (Number(req.headers['if-none-match']) == version) {
      res.statusCode = 304;
      res.end();
      return
    } else {
      res.setHeader('Etag', version);
      res.end('hello world2222');
      return
    }
  }
  res.setHeader('Etag', version);
  res.end('hello world');
})
server.listen(3001);