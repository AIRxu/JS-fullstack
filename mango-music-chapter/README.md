给数据建模
MVVM React  奥利奥  界面由数据驱动  前端的设计模式
MVC Model View Controller  后端的web开发模式

1. 做react/vue项目， 仿一个音乐类的
2. 做一个上线的业务 编程思路 架构 技能点

- react  组件由 组件component 实例和一个css文件 styl
  create-react-app  css/less  styl  
  不一定要用官方的create-react-app, 下次自己的项目， 我就可以从这个目录开始  项目模板
  头条， 
  类文件大写， 一个文件夹一个组件， 便于维护和模块化 
- 单页应用？ Single Page Application SPA
  老的网站就是多页的，点击链接跳转
  只有一个页面的应用 
  提升网站的用户体验 
  点击路由时， 不会重新刷整个页面， 而是根据路由的配置， 把相应的组件显示出来  
- 根据界面 可以分析出 头尾不动， 中间内容根据Route 匹配 
- Loading 组件 在整个应用中是什么地位？ 
  哪个目录下创建？ 
  containers 
  components  路由级别组件 
  Loading 服务于任何listAPI 列表组件  通用组件

  1. 数据请求阶段， 显示loading
  2. 数据来了后， 隐藏loading
  父组件 要给loading 传参  

- api/  分层的能力， 职责分离 是代码复杂， 且大型化的前提， 
  每个路由模块页面独立一个js 文件   便于维护和代码阅读

- 长的列表页面，在移动端支持scroll