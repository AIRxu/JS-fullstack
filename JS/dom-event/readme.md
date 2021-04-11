## DOM
document object model(模型 => 树)   dom树
- 规定了  DOM操作
- 规定了  事件模型
```js
addEventListener('click', ()=> {}, false)
```
addEventListener的第三个参数，默认为false，代表处于冒泡阶段(child => parent => document => window)
改为true就代表捕获阶段(window => document => parent => child)

点击之后： 捕获阶段 =》 目标阶段（到达目标元素的时候就是目标阶段） =》 冒泡阶段 =》 结束

## ECMA
规定了 js 语法
