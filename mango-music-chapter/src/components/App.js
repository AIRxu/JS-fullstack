import React from 'react';
// Router是路由总管理，负责让我们的应用单页化，不用一直跳转，而是在主页切换
// Route是每个路由规则，由path和  / component组成
// Switch 唯一匹配的路由
// NavLink是  a标签的组件化  和Link有什么区别呢？  没什么区别 只是NavLink代表导航栏的Link
// Redirect  从首页 /  跳转到  /recommend
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
// 将BrowserRouter命名为Router更加语义化
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import './App.styl'; // webpack
import logo from '../assets/imgs/logo.png';

// # hash
// https://music.163.com/#/my/  hashRouter  兼容性更好 多用于pc端 他可以兼容IE
// https://y.music.163.com/m/playlist?id=5010470270  historyRouter  url 更加语义化  多用于移动端


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* 不变的地方写一下  头部和tabBar */}
          <header className="app-header">
            <img src={logo} alt="" className="app-logo" />
            <h1 className="app-title">Mango Music</h1>
          </header>
          <div className="music-tab">
            <div className="tab-item">
              <NavLink className="nav-link" to="/recommend"><span>推荐</span></NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/ranking"><span>排行榜</span></NavLink>
              </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/search"><span>搜索</span></NavLink>
              </div>
          </div>
          <Switch>
            <Route path="/recommend" component={Recommend} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/search" component={Search} />
            <Redirect from="/" to="/recommend" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;