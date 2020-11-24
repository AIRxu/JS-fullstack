const fs = require('fs');
const path = require('path');

// 同步读取项目中的文件，并以数组的形式输出
console.log(fs.readdirSync(path.join(
  process.cwd(),
  'src'
)))  //项目的根目录的物理路径

// CWD => current workshop directory



  // // 子目录，孙目录 递归目录
  // // 递归
  // // 1.一个大问题 分解成很多歌相同的小问题
  // // 2.退出条件 目录下没有子目录了
  // let result = [];
  // //    process node 全局变量 进程

  // // console.log(
  // //   path.join(process.cwd(),startPath),'---------'
  // // );

  // // 1.读取所有文件
  // let files = fs.readdirSync( //同步读取目录
  //   path.join( //用path.join把当前目录和开始路径连接起来
  //     process.cwd(), startPath
  //   )
  // );
  // // console.log(files);

  // for (let file of files) {
  //   // console.log(file);
  //   // stat是文件的状态 由此来判断文件是什么类型
  //   let stats = fs.statSync(
  //     // 再次把路径和文件名拼接起来
  //     path.join(process.cwd(), startPath, file)
  //   );
  //   if (stats.isFile()) {
  //     result.push(file)
  //   }
  //   if (stats.isDirectory()) {

  //   }
  //   // console.log(stats);
  // }
  // return result;