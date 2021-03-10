const https = require('https');
const cheerio = require('cheerio');
const fs =require('fs');

https.get('https://movie.douban.com/top250', function (res) {
  // console.log(res);
  // 拿到的结果是分段返回的，需要自己拼接
  let html = '';
  // 拼接操作
  res.on('data', function (chunk) {
    html += chunk;
  })
  // 拼接完成
  res.on('end', function () {
    console.log(html);
    const $ = cheerio.load(html);
    // 拿到25个li 下面的item 而不是li.item
    let allFilms = [];
    $('li .item').each(function () {
      // document.querySelector
      // this 循环时，本次内的title里面的电影名称
      // this.querySelector
      const title = $('.title', this).text();
      const star = $('.rating_num', this).text();
      const pic = $('.pic img', this).attr('src');
      // console.log(title, star, pic);
      // 拿到之后就可以存在你的数据库里面
      // 存成一个 JSON文件
      allFilms.push({title, star, pic});
    })
    fs.writeFile('./films.json', JSON.stringify(allFilms), function(err) {
      if(!err) {
        console.log('文件写入完毕！');
      }
    })
    // 图片下载一下
    downloadImage(allFilms);

  })
})

function downloadImage(allFilms) {
  for (let i = 0; i < allFilms.length; i++) {
    const picUrl = allFilms[i].pic;
    // 下载
    // 页面 url === html 浏览器帮你渲染了
    // 页面 url === 图片内容 浏览器帮你渲染了
    // xx.png   双击打开一个图片
    // 发送请求 -> 拿到内容
    // fs.writeFile('./xx.png', '内容')
    https.get(picUrl, function(res) {
      res.setEncoding('binary');
      let str = '';
      // on和addeventlistener一个意思，都表示在监听
      res.on('data', function(chunk) {
        str += chunk;
      })
      res.on('end', function() {
        // 回调函数位置放到最后一个
        // 回调函数 第一个参数基本都是 err 对象
        fs.writeFile(`./images/${i}.png`, str, 'binary', function(err){
          if (!err) {
            console.log(`第${i}张图片下载成功！`);
          }
        })
      })
    })
  }
}