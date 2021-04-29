## req
发请求的方法
1. 浏览器： xhr fetch
2. node： http.get()

不同的API -> HTTP请求 -> 到这里就一样了

HTTP：超文本传输协议
1. 调用xhr发送HTTP请求
```js
const xhr  = new xmlhttprequest();
xhr.setHeader('Content-Type':'application/json');
xhr.open('POST', 'api.com', true);
xhr.send({a:1, b:2})
```
2. 浏览器拼接报文
http1.1 报文（纯文本）：
- 首行
- 首部
- \r\n
- 实体

## 解析报文
split('\r\n');

限制：必须等待拿到一份完整的报文
现实：报文传输的时候可以分段传输，不能一下拿到完整的报文

## 解析
FSM (finite state machine)  有穷状态机
infinite  无穷  是一个数字类型  正无穷 负无穷

浏览器解析报文：body（html），header，响应行
html怎么渲染出来的？浏览器也要解析 html
js怎么被执行的？浏览器引擎 解析js V8

解析成什么？


## 编译原理

代码都是字符串
- 词法分析（分词）  代码切割成一个个最小有效的单位
- 语法分析
- 生成中间代码
- 生成目标代码（机器可读的）