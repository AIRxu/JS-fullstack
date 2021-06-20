const url = require('url');

const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node";
console.log(url.parse(urlString));