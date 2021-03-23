<div class="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>


对象字面量，表达能力
JSON  描述下
{
  name:'xx',
  sex:'男',
  isSingle:'false'
}

html document   是什么关系?

- URL 输入  在打开页面之后，发生了什么？
  1.空白页面
  父子进程    兄弟进程
  - 启动了一个tab 主进程
  - 启动一个网络请求  进程2 url：http://127.0.0.1:5500/JS/ats/index.html  拿到html文件
  - 启动了一个渲染页面的进程

  WEB应用也是多进程结构
  当我们用chrome打开页面的时候启动了四个进程
  BOM browser object  model
  DOM document  object  model
  abstract  syntax  tree  抽象语法树

  GPU加速，让gpu来绘制页面，网页打开更快，这也是chrome击败IE的原因

了解页面的生成过程 浏览器也像操作系统一样，初始化进程来执行任务
text/html   文本  转化为  js  document
浏览器也不知道怎么显示HTML  要通过JSON来一层一层解析HTML内容
html -> json  AST