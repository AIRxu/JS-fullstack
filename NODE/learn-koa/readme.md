Tencent   腾讯
语言排行： C++  js  go  java  python
QQ是连接一切的  即时通讯  tcp/ip  协议
HTTP  TCP/IP  WebSocket

- koa node web 开发框架
  7天后 做个bolg

背后的基石是什么？
koa加速了 node web开发  一个web服务就是一个webapp
koa在 3000端口提供了http访问服务

http.createServer()
http node 内置模块  createServer  启动服务
koa封装了他们

http 协议本质是干啥的
ctx context   上下文环境（request response）
http 协议 诞生于1991年，用于传输学术论文的
采用基于请求(ctx.request)响应(ctx.response)的模式,在网络间传输HTML
超文本的内容  HTTP/0.9  1991年

- HTTP(web server 应用层协议)基于TCP协议
  TCP用户 是运营商给的动态IP ，网站 在阿里云（IP）  传输  HTML

▪ 应用层  HTTP
  TCP连接 三次握手
▪ 表示层
▪ 会话层
▪ 传输层  TCP
▪ 网络层
▪ 数据链路层
▪ 物理层

- 建立连接后，会发送一个GET请求行（request method GET url/）的信息
GET / template.html
- 服务器接收到请求信息后，读取对应的html文件，并将数据以asc码的格式返回给用户的浏览器
- 断开连接

- http req + res  可以完成一次请求？
  HTTP协议  基于请求的应答模型  1991年传输的是最简单的html文本
  ctx.req ctx.res
  a href  req url res
- req res之间是什么关系
  n : 1的关系 
  如果n非常大，那就会卡   node很优秀天生适合处理高并发，因为它是异步的
  createServer  I/O file  数据库
  php是同步的容易阻塞 python性能也不行
  GO 多核计算
  HTTP 网络通信协议 TCP/IP 7层
  数据流动  node流（在TCP层流动）
  建立一个管道（传输控制协议）  stream
  GET / 请求行
  关闭 断开连接，HTTP可以服务于更多用户
  释放服务器的内存

  req   res   请求对象  返回对象
  请求头  响应头

- writeHead 在做什么事

- head 在http是什么

- img不可显示怎么办
  1. img是一个资源，http协议访问的能力
  http接受的文件类型，