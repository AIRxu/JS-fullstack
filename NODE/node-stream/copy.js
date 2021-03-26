const fs = require('fs');

function copy(sourceUrl, desUrl) {
  // fs.readFile(sourceUrl, (err, info) => {
  //   if (!err) {
  //     fs.writeFile(desUrl, info, (err) => {
  //       if (!err) {
  //         console.log('拷贝完毕！');
  //       }
  //     })
  //   }
  // })

  // API写法
  // 源头
  // 流：基础类 Stream
  // 可读流、可写流、双工流和转换流
  const readStream = fs.createReadStream(sourceUrl);
  const writeStream = fs.createWriteStream(desUrl);
  readStream.pipe(writeStream);
  // pipe ===  |
}
// 不用流：
// 读完一个文件得到内容，info内容 放到我们计算机的内存里，然后再把它写到某个地方，如果文件过大会使内存溢出，且处理速度低下
// 区别
// 前端：baidu.com -> html,css,js 浏览器  ->  我看到
// 小王  baidu.com -> html,css,js 浏览器  ->  小王看到
// 浏览器执行 js 浏览器会申请内存 浏览器在各自电脑上运行  天然就是分布式的
// 高并发在分布式的前提下就不会产生
// 后端 baidu.com 一台服务器（linux电脑） 但是它要处理很多人的请求  它就是中心化的
// 内存占用过多就会卡   服务器卡的话所有人都卡，个人卡的话只是自身问题
copy('./readme.md', './copy.md')