React = 数据 + UI

不再使用派发的方式来使用  父组件 -> 子组件

而是使用Redux   数据仓库，任何组件可以和redux connect来取数据

搭建的时候 Store -》 privider -》 App
connect(mapStateToProps)(组件名)

reducer可以有多个
1. 状态由redux管理，数据由reducer函数提供
2. 状态可以通过 connect 借到组件里去，就会给他一个state 单一状态树 state.comments
props里面