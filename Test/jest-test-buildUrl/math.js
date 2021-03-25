function add(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

function encode(str) {
  return encodeURIComponent(str)
  .replace('%5B', '[').replace('%5D', ']');  //  把解码完的中括号还原，不需要解码数组里的中括号
}

function buildUrl(url, params) {
  let parts = [];
  Object.keys(params).forEach((key) => {
    let value = params[key];
    // 拿到了value之后先判断它是不是null或者undefined，如果是就直接return终止
    if (value === null || typeof value === 'undefined') {
      return;
    }
    // 再判断value的内容是不是数组，如果是数组，就给key后面拼接上[],如果不是数组也把它转换成数组的形式
    if(Array.isArray(value)) {
      // c: [1, 2, 3]  =>  c[]=1&c[]=2&c[]=3
      key += '[]';
    } else {
      value = [value];
    }
    // 接下来把value内的值循环一遍，都转换成url后面所需的字符串
    value.forEach(val => {
      let part = `${encode(key)}=${encode(val)}`;
      parts.push(part);
      // console.log(part);
    })
  })
  console.log(parts);
  console.log(parts.join('&'));

  const hashIndex = url.indexOf('#');
  if(hashIndex !== -1) {
    url = url.slice(0, hashIndex);
  }
  url += '?' + parts.join('&');
  return url
}


// node模块化的一个方案：commonjs
// const http = require('http')
// 定义一个自己的模块
// 导出
module.exports = {
  add,
  minus,
  buildUrl
}