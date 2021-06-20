// const url = require('url');

const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node";
// console.log(url.parse(urlString));
// 如果不使用url的parse怎么来解析呢？

function getQueryString(urlStr) {
  let obj = new Object();
  if (urlStr.indexOf('?') != -1) {
    let queryStr = urlStr.split('?')[1];
    if (queryStr.indexOf('#' != -1)) {
      queryStr = queryStr.split('#')[0];
    }
    // console.log(queryStr);
    let strs = queryStr.split('&');
    for(const str of strs) {
      const buffer = str.split('=');
      obj[buffer[0]] = buffer[1];
      console.log(obj);
    }
    return obj
  }
}
console.log(getQueryString(urlString));