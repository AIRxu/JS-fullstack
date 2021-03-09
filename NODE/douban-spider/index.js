const https = require('https')
const cheerio = require('cheerio')

https.get('https://movie.douban.com/top250', function (res) {
  // console.log(res);
  // 拿到的结果是分段返回的，需要自己拼接
  let html = '';
  // 拼接操作
  res.on('data', function(chunk) {
    html += chunk;
  })
  // 拼接完成
  res.on('end', function() {
    console.log(html);
  })

})