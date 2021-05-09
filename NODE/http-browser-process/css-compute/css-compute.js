let htmlStr = `
<html>
  <head></head>
  <body>
    <img a="a" b="b" />
    <span></span>
    <div class="cls" id="myid"></div>
  </body>
</html>
`
let currentToken = null;
let stack = [{ type: 'document', children: [] }]
// 使用栈来操作匹配标签对，生成一颗DOM树
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));
function emit(token) {
  // console.log(token);
  let top = stack[stack.length - 1];
  // console.log(top);
  if (token.type === 'startTag') {
    let element = {
      type: 'element',
      tagName: token.tagName,
      children: [],
      attributes: token.attributes
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
      attributes: token.attributes
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
  } else if( c.match(/[a-zA-Z]/)) {
    // 如果匹配到字母，说明遇到属性名了，创建一个当前属性的JSON
    currentAttribute = {
      name:c,
      value:''
    }
    return attributeName
  } else if(c.match(/[/t/r/n ]/)) {
    // 这里接收一次操作完成后的空格，也就是第一个属性拼接之后的情况
    // 调用自身，从头开始拼接当前的currentAttribute
    return beforeAttributeName
  } else if (c === '>') {
    // 遇到大于号表示结束，代理到tagName中处理结束操作
    // 不写(c)就会跳过当前操作的参数c
    return tagName(c)
  }
}
function attributeName(c) {
  if (c.match(/[a-zA-Z]/)) {
    currentAttribute.name += c;
    return attributeName
  } else if (c === '=') {
    // 匹配到 = 就跳转到属性值处理中
    return attributeValue
  }
}
function attributeValue(c) {
  console.log(c);
  // <div class="cls" id="myid"></div>
  if (c === '\"') {
    // 右斜杠是转义字符，不使用的话无法表示后双引号
    // 匹配到" 本次就循环调用消耗掉这个字符
    return attributeValue
  } else if (c.match(/[a-zA-Z]/)) {
    // 循环拼接属性值
    currentAttribute.value += c;
    return attributeValue
  } else {
    // 如果没有currentToken中没有attributes就新建一个，有的话就直接将currentAttribute push进去
    if(!currentToken.attributes) currentToken.attributes = [];
    currentToken.attributes.push(currentAttribute);
    // push 完当前的currentAttribute就将它置空好处理下一个 currentAttribute
    currentAttribute = null;
    // 如果这里不带括号和参数就会跳过空格和>  这样跳转就会无法判断当前状态
    // 这个分支遇到的是除了""和字母的也就是 空格和> 代理到beforeAttributeName中去处理
    return beforeAttributeName(c)
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