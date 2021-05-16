// 浏览器会将样式进行格式化处理
// font-size: bold -> 800
// width: 200px -> 逻辑运算用的是数字200
// background-Color: red; -> rgb()
function getStyle(element) {
  if (!element.style) {
    element.style = {};
  } else {
    return element.style
  }
  for (let prop in element.computeStyle) {
    let value = element.computeStyle[prop]
    if (value.includes('px')) {
      value = parseInt(value);
    }
    // 这里将格式化后的数据再放入DOM树的style中
    element.style[prop] = value;
  }
  return element.style
}
function layout(element) {
  // 先获取解析完成的 computeStyle
  if (!element.computeStyle) return;
  let elementStyle = getStyle(element);
  if (elementStyle.display !== 'flex') return;
  if (elementStyle['justify-content' !== 'center']) return;
  let mainSpace = elementStyle.width;
  for(let child of element.children) {
    let childStyle = getStyle(child);
    mainSpace -= childStyle.width;
  }
  // 主轴绘制的起点
  let mainBase = mainSpace / 2;
  // 算出主轴全部元素的x坐标
  for(let child of element.children) {
    let childStyle = getStyle(child);
    childStyle.x = mainBase;
    childStyle.y = 0;
    mainBase += childStyle.width;
  }
  // 交叉轴的
}

module.exports = layout;