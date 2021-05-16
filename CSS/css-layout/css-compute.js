const css = require('css');
const layout = require('./layout');
const images = require('images');
let htmlStr = `
<html>
  <head></head>
  <body>
    <div class="wrap">
      <div class="main"></div>
      <div class="aside"></div>
    </div>
  </body>
</html>
`
let cssStr = `
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: rgb(255, 0, 0);
}
.main {
  width: 200px;
  height: 200px;
  background-color: rgb(0, 255, 0);
}
.aside {
  width: 100px;
  height: 100px;
  background-color: rgb(0, 0, 255);
}
`
let rules = css.parse(cssStr).stylesheet.rules;

let currentToken = null;
let stack = [{ type: 'document', children: [] }]
// 使用栈来操作匹配标签对，生成一颗DOM树
parse(htmlStr);
// console.log(JSON.stringify(stack[0], null, 2));
// 拿到整棵树
// 从头到尾遍历整棵树，渲染每个element
let tree = stack[0];
const viewPort = images(800, 600);
function render(view, element) {
  if (element.style) {
    let img = images(element.style.width, element.style.height);
    if (element.style['background-color']) {
      let color = element.style['background-color'];
      let start = color.indexOf('('), end = color.lastIndexOf(')');
      let rgb = color.substring(start + 1, end).split(',').map(e => parseInt(e));
      console.log(rgb);
      img.fill(rgb[0], rgb[1], rgb[2]);
    }
    view.draw(img, element.style.x, element.style.y);
  }
  if (element.children) {
    // 循环绘制孩子节点
    for(let child of element.children) {
      // console.log(child);
      render(view, child);
    }
  }
}
render(viewPort, tree);
viewPort.save('render.jpg');


function match(selector, ele) {
  if (!selector || !ele.attributes) {
    return false
  }
  if (selector.charAt(0) === "#") {
    // case1 id选择器与标签的id相同
    let idAttr = ele.attributes.find(e => e.name === 'id');
    if (idAttr && idAttr.value === selector.replace('#', '')) return true
  } else if (selector.charAt(0) === ".") {
    // case2 属性选择器与标签的属性相同
    let classAttr = ele.attributes.find(e => e.name === 'class');
    if (classAttr && classAttr.value === selector.replace('.', '')) return true
  } else {
    // 如果不符合上述两种，那么就看标签名是否和选择器的值相同
    if (ele.tagName === selector) {
      return true
    }
  }
  return false
}
function computeCss(ele) {
  // 计算符合这个ele 的所有css规则并且应用到这个节点上面
  // 1：靠ele属性的父节点和css里面的选择器匹配
  // 2: 匹配的时候是从后往前匹配
  let elements = stack.slice(0).reverse();
  if (!ele.computeStyle) ele.computeStyle = {};
  for (let rule of rules) {
    let selector = rule.selectors[0].split(' ').reverse();
    if (!match(selector[0], ele)) {
      // 如果都匹配不上就跳过本轮循环
      continue;
    }
    // 看父级是否满足
    // [{type: 'doc'}, {heml}, {header}]
    // [#id .parent #parentID span]
    let j = 1;
    for( let i = 0; i < elements.length; i++ ) {
      // 使用每一个选择器去匹配elements里面的元素
      if (match(selector[j], elements[i])) j++;
    }
    if (j >= selector.length) {
      // 匹配完成后将rule 里面的css 添加到ele里面的computeStyle
      for(let declare of rule.declarations) {
        const { property, value } = declare;
        ele.computeStyle[property] = value;
      }
    }
  }
}
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
    computeCss(element);
    stack.push(element);
    // if (!top.children) top.children = [];
    // console.log(top.children);
    top.children.push(element);
  } else if (token.type === 'endTag') {
    if (token.tagName !== top.tagName) {
      throw new Error('tagname match error')
    } else{
      // flex 布局放到结束标签的位置
      // 因为 align-items justify-content 需要知道子元素的宽高
      // 得拿到这些数据才能 计算(x, y)
      layout(top);
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
  // console.log(c);
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