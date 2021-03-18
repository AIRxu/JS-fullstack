"use strict";
// TS:内置的类型
// boolen number string 
// 数组:每一项的类型都是一样的   元祖:可以不同
var list = [1, 2, 3, 4, '5'];
var list1 = [1, 2, 3, 4];
var list2 = ['1', 2];
// 枚举:变量的类型只能从定义好的范围里面取，超出这个范围就取不到
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// 变量后面的冒号代表该变量的类型
// let color:Color = '123'
var color = Color.Green;
var color1 = Color.Red;
var colorName = Color[0]; //Red
// any
var a; //用户输入，不清楚的类型，适用于any
// void   空
// function test(a): void {}
// null, undefined
var b = null;
// never
function test() {
    while (true) {
    }
    throw new Error('error');
}
// 变量
var RFS_METHOD;
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
function beFull(el) {
    // 检查兼容性
    // 4个中的一个
    el[RFS_METHOD]();
}
// ts结合原生 html DOM
// ts结合 Node
// ts结合 React
// dom节点
// 如果节点类型在TS里面没有内置，就到lib里面声明一下
var box = document.querySelector('.box');
var btn = document.getElementById('btn');
if (btn) {
    btn.addEventListener('click', function () {
        // box.requestFullscreen();
        if (box instanceof Element) {
            beFull(box);
        }
    });
}
