## 协议
应用层上的一个协议，
fe    <>=>    http    <=>    rd
fe:李宗盛   传给  后端
后端：李宗盛    歌传给前端
两方传输数据  都要遵守http协议


https://www.baidu.com/
App   http

## ajax

## 同步
一行接着一行执行
## 异步
代码书写的顺序 并不是执行的顺序


## node
- js    chrome 内 v8引擎 解释和执行js
- 页面
- 网络

js 只在浏览器里面运行
有个大佬把浏览器里面的V8引擎拿到了服务端，单独剥离出来了，这个新语言就叫 node
<!-- 用node -->
node index.js 

1. 双击打开文件
file:///C:/Users/huang/Desktop/JS-FUllSTACK/JS/ajax-http/ajax.html
2. live-server
http://127.0.0.1:8080/
127.0.0.1 IP 四个数字（0~255）
等同于
localhost 域名
把ajax.html这个文件 放到一个本地服务器上面

https://www.baidu.com/ 域名和ip地址是等同的

端口存在的目的：
一台服务器（电脑），运行很多东西
port是区别每一个应用
ip地址能够找到你这台电脑
假设：
数据库占用 8060
提供搜索服务 占用443


## http 规定
- 请求行
  - 方法：GET juejin.com?query=js
  - url: juejin.com?query=js
  - 版本: 1.1
- 首（头）部
  - key：value
  - content-Type
- 实体
  - 传输的具体数据