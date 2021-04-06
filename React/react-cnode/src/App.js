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
      tab: 'all',
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
          lists: res.data.data
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
      tab
    }, () => {
      // setState是异步的，等更新完<tab></tab>之后再调用请求方法
      this.handleGetPost()
    })
  }
  render() {
    const { lists, tabs, tab } = this.state;
    return (
      // js 表达式 都用 {} 包起来
      <div>
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
