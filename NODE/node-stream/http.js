const https = require('https'); 
const fs = require('fs');

https.get('https://movie.douban.com/top250', function (res) {
  // console.log(res);   //继承了 流，且是一个可读流 提供数据的那一方
  // 拿到的结果是分段返回的，需要自己拼接，就是流的概念了
  // 如果不是用流的方法：一次性接收所有数据，一次性交给我们
  // 现在想把 html保存在本地，取名为douban.html
  const writeStream = fs.createWriteStream('./douban.html');
  res.pipe(writeStream);
})
https.get('https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg', function(res) {
  const writeStream = fs.createWriteStream('./1.png');
  res.pipe(writeStream);
})

https.createServer((req, res) => {
  
})