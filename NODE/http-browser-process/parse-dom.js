let htmlStr = `
<html>
  <head></head>
  <body>
    <div></div>
  </body>
</html>
`
let currentToken = null;
parse(htmlStr);
function emit(token) {
  console.log(token);
  currentToken = null;
}
function parse(str) {
  state = start;
  for (let c of str) {
    state = state(c);
  }
}
function start (c) {
  if (c === '<') {
    return tagOpen
  } else {
    return start
  }
}
function tagOpen(c) {
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]&/)){
    currentToken = {
      type: 'startTag',
      tagName: c
    }
    return tagName
  }
}
function tagName(c) {
  if (c.match(/^[a-zA-Z]&/)) {
    currentToken.tagName += c;
    return tagName
  } else if ( c === '>') {
    // tag 拼接结束了
    emit(currentToken);
    return start
  }
}
function endTagOpen(c) {
  // </html>
  if (c.match(/^[a-zA-Z]&/)) {
    currentToken = {
      type: 'endTag',
      tagName: c
    }
    return tagName
  }
}

