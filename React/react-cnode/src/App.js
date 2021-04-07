import React from 'react';
import axios from 'axios';
import './App.css';


// MV-VM view视图 model数据
// model变了view会自动更新，VM是绑定的
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        { content: '全部', param: 'all' },
        { content: '招聘', param: 'job' },
        { content: '精华', param: 'good' },
        { content: '分享', param: 'share' },
        { content: '问答', param: 'ask' },
      ],
      value: 123456,
      tab: 'all',
      isLoading: true,
      lists: []
    }
  }
  handleGetPost = () => {
    const { tab } = this.state;
    // 总条数 / 40 = 页数
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      params: {
        tab: tab,
        page: 1,
        limit: 40
      }
    })
    .then(res => {
      console.log(res.data);
      // 请求回来之后 我们要修改属性的状态
      this.setState({
        lists: res.data.data,
        isLoading: false
      })
    })
    .catch((err) => {
      this.setState({
        isLoading: 'false'
      })
    })
  }
  componentDidMount() {
    this.handleGetPost()
  }
  handleTabChange = (event) => {
    // 箭头函数 this 定义的时候的位置决定的
    // 要知道点了哪一项
    // 点了谁，谁就是event.target
    // console.log(event.target);
    const tab = event.target.getAttribute('data-tab');
    // 发个请求
    this.setState({
      tab,
      isLoading:'false'
    }, () => {
      // setState是异步的，等更新完<tab></tab>之后再调用请求方法
      this.handleGetPost()
    })
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    const { lists, tabs, tab, isLoading, value} = this.state;
    return (
      // js 表达式 都用 {} 包起来
      <div>
        {/* defaultValue的方法是不受控组件
            value+onChange方法是受控组件，其属性value存在于this.state内
            当需要获取用户输入的值时
            受控组件很好获取  直接  this.state.value就可以取到
            不受控组件则需要操作dom元素才能获取到  document.getElementById("name").value
            在现代前端开发中不使用DOM操作所以要用受控组件
        */}
        <input type="text" placeholder=" " defaultValue="123" id="name"/>
        <input type="text" placeholder=" " value={value}
        onChange={this.handleChange}
        />
        {/* react 不会渲染那些 空数组 null undefined false 的内容 */}
        { isLoading && '正在加载中'}
        { lists.length === 0 && '暂无文章请重试'}
        {
          tabs.map((tabObj, i) => {
            return (
              <div key={i} data-tab={tabObj.param}
                className={tabObj.param === tab ? 'hight-light' : ''}
                onClick={this.handleTabChange}
              >
                {tabObj.content}
              </div>
            )
          })
        }
        {
          // map返回一个数组  react 如果 jsx(html+js) 存在数组，react会自己展开数组里面的每一项
          // react列表渲染
          // 循环的时候用map forEach也可但是不如map
          lists.map((list, i) => {
            return (
              <div key={i}>
                {list.title}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
