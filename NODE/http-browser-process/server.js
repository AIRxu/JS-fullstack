const http = require('http');

http.createServer((req, res) => {
  res.end('ok');
})
.listen(8088, () => {
  console.log(8088);
})