let htmlStr = `
<html>
  <head></head>
  <body>
    <img />
    <span></span>
    <div></div>
  </body>
</html>
`
let currentToken = null;
let stack = [{ type: 'document', children: [] }]
// 使用栈来操作匹配标签对，生成一颗DOM树
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));
function emit(token) {
  console.log(token);
  let top = stack[stack.length - 1];
  // console.log(top);
  if (token.type === 'startTag') {
    let element = {
      type: 'element',
      tagName: token.tagName,
      children: [],
      attribute: []
    }
    stack.push(element);
    // if (!top.children) top.children = [];
    // console.log(top.children);
    top.children.push(element);
  } else if (token.type === 'endTag') {
    if (token.tagName !== top.tagName) {
      throw new Error('tagname match error')
    } else{
      stack.pop(token);
    }
  } else if (token.type === 'selfCloseTag') {
    let element = {
      type: 'element',
      tagName: token.tagName,
      children: [],
      attribute: []
    }
    top.children.push(element);
  }
  currentToken = null;
}
function parse(str) {
  let state = start;
  for (let c of str) {
    state = state(c);
  }
}
function start(c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  if (c === '/') {
    return tagClose
  } else if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken.tagName += c;
    return tagName
  } else if (c.match(/[/t/r/n ]/)) {
    return beforeAttributeName
  } else if (c === '>') {
    // 拼接结束了
    emit(currentToken);
    return start
  }
}
function beforeAttributeName(c) {
  if (c === '/') {
    currentToken.type = 'selfCloseTag';
    return tagName
  }
}
function tagClose(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName
  }
}