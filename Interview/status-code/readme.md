# 计算机网络  HTTP

- a 怎么样才能点击它不跳转？
- 浏览器上输入  http://www.baidu.com    http协议
  会发生什么？  状态码？
    307
    200
    204
  https://www.baidu.com   跳转到这个  加密的 http协议
  浏览器可以读懂状态码

1. http://www.baidu.com
  redirect跳转
  res writeHead(307)    Location: https://www.baidu.com/
  https://www.baidu.com

1XX 正在处理中
2XX 成功
3XX 跳转
4XX 客户端错误  404
5XX 服务器端错误  500 503服务器不能响应