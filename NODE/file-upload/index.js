const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.createReadStream('./index.html').pipe(res);
})
.listen(9090, () => {
  console.log('9090');
})