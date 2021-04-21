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