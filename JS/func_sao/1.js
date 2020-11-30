// 长方形面积的函数
/**
 * 
 * @param {*} w 
 * @param {*} h 
 */
function area(w, h) { //es5
  // console.log(w, h) //不传参数的时候都是undefined
  // argument是我们给函数传递的参数，是一个类数组
  console.log(arguments);
  if (arguments.length < 2) {
    throw new Error('请传递两个参数');
    // console.error('参数不够');
    return;
  }
  if(typeof w != 'number' || typeof h != 'number') {
    throw new Error('参数类型有误！');
    return;
  }
  return w * h;
}

var area1 = function (w, h) {
  // 匿名函数
}
let getArea = (w, h) => w * h; //es6

console.log(area(1.2, 3.445));
