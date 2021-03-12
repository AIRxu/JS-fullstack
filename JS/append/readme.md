-  DOM document 文档就是网页， js内存里 文档对象模型
  js -> html 转化
  DOM JS 数据结构 tree  appendChild 组成一棵树
  ul->li->textNode
  document.createElement('tag') 标签节点
  document.createTextNode('babab')  文本节点

  哪怕是文字 都是节点 都是对象
  前端js， html， css,  js是王者
  js 可以操控hml， css 这些API (这些API 叫做 DOM API)

  - 昨天讲的是API
    document.createElement('div')
    document.appendChild()
    document.createTextNode()   面向API变成
  
  - 面向业务编程
    this.state.liked  true/false  html 更新
    1. 分步
      动态地讲like button 添加到页面上
      likeButton class 方便复用
      既要用html来快速完成DOM，又要添加事件
      1. 要DOM节点对象
      2. innerHTML

- js this 指向 你不知道的JavaScript this
  this 是动态决定的 在每个函数里面都有this，它是一个指针
  具体指向谁，取决于调用它的方式
  1. 作为对象方法调用的时候，this指向对象本身
  2. 作为事件函数调用时，this指向事件发生的元素
  bind可以强行绑定函数内部的this指向谁

- 封装 class  复用
  constructor 申明属性 this.state
  render()  渲染到页面上
  changeLikeText()

  class LikeButton {
    constructor() {

    }
    render() {

    }
    changeLikeText() {
      
    }
  }