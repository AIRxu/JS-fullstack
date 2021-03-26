const fs = require('fs');

fs.readFile('./readme.md', (err, data) => {   //  node 异步无阻塞
  if (err) {
    console.log('出错了');
  }
  console.log(data);
})

console.log(123);