const process = require('process');
const axios = require('axios');
const inquirer = require('inquirer');
const http = require('http');
const fs = require('fs');
const { type } = require('os');
process.title = 'node music';
// argv这个参数可以拿到用户输入的参数
// console.log(process.argv);

// 我先现在要拿到用户输入的搜索关键字，也就是argv数组里面的第三项
let keywords = process.argv[2];
// 像服务器端请求数据，拿到我们想要的歌曲信息
function request() {
  return axios({
    method:'GET',
    url:'http://localhost:3000/search',
    params:{
      keywords
    }
  })
  .then(res => {
    // console.log(res);
    return res.data;
  })
}

function choose(songs) {
  return inquirer.prompt([
    {
      type:"list",
      name:'songs',
      message:`共有${songs.length}首，请使用回车选择`,
      // 这里应该找到一个能唯一标识歌曲的属性，要不然名字相同的情况下很难区别开
      choices:songs.map(song => {
        return {
          name:song.name,
          value:song.id
        }
      })
    }
  ])
  .then(c => {
    // console.log(c);
    console.log(c);
    // const Sname = c.name;
    const id = c.songs; 
    return Sname,id
  })
}
// 在使用promise类函数的时候return里面给到的数据可以用 .then链式调用再次取到这份数据，
// 这里我们只需要data下面的result下面的songs，把它交给choose函数来处理
request()
.then(res => {
  // console.log(res);
  // console.log(res.result.songs);
  return choose(res.result.songs)
})
// .then(id => {
//   axios({
//     url:'http://localhost:3000/song/url',
//     params:{
//       id
//     }
//   })
//   .then(res => {
//     let url = res.data.data[0].url;
//     console.log(url);
//     return url
//   })
//   .then(url => {
//     console.log('获取到url', url, '开始下载');
//     http.get(url, res => {
//       res.pipe(fs.createWriteStream(`./${keywords}.mp3`));
//       res.on('end', ()=> {
//         console.log('下载完毕！');
//       })
//     })
//   })
// })
