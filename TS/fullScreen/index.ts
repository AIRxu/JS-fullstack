// TS:内置的类型
// boolen number string 
// 数组:每一项的类型都是一样的   元祖:可以不同
let list = [1, 2, 3, 4, '5'];
let list1: number[] = [1, 2, 3, 4];
let list2: [string, number] = ['1', 2];
// 枚举:变量的类型只能从定义好的范围里面取，超出这个范围就取不到
enum Color { Red = 0, Green = 1, Blue = 2 };
// 变量后面的冒号代表该变量的类型
// let color:Color = '123'
let color: Color = Color.Green;
let color1: Color = Color.Red;
let colorName = Color[0];   //Red
// any
let a: any;    //用户输入，不清楚的类型，适用于any
// void   空
// function test(a): void {}
// null, undefined
let b: null = null;
// never
function test(): never {
  while (true) {

  }
  throw new Error('error');
}

// 外部类型

// 联合类型
// 定义一个类型:进入全屏的时候，调用的就是其中之一  最后进行判断，哪个能用就用哪个
type RFSmethods = 'requestFullScreen' | 'webkitRequesrFullScreen' | 'mozRequestFullScreen' | 'msRequestFullScreen'
interface Element {
  requestFullScreen(): any,
  webkitRequesrFullScreen(): any,
  mozRequestFullScreen(): any,
  msRequestFullScreen(): any,
}

// 变量
let RFS_METHOD: RFSmethods
if ('requestFullScreen' in document.body) {
  RFS_METHOD = 'requestFullScreen';
}
else if ('webkitRequesrFullScreen' in document.body) {
  RFS_METHOD = 'webkitRequesrFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
  RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullScreen' in document.body) {
  RFS_METHOD = 'msRequestFullScreen';
}

// object
function beFull(el: Element) {
  // 检查兼容性
  // 4个中的一个
  el[RFS_METHOD]();
}
// ts结合原生 html DOM
// ts结合 Node
// ts结合 React
// dom节点
// 如果节点类型在TS里面没有内置，就到lib里面声明一下
const box = document.querySelector('.box');
const btn = document.getElementById('btn');
if (btn) {
  btn.addEventListener('click', function () {
    // box.requestFullscreen();
    if (box instanceof Element) {
      beFull(box);
    }
  })
}