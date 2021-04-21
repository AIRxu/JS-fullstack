import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import List from './List';
import Chart from './Chart';
//  <>组件： React.fragment

class index extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <Link to="/list">列表模式</Link>
        <Link to="/chart">图表模式</Link>
        {this.props.children}
        <Route path="/" exact component={List} />
        <Route path="/list" component={List} />
        <Route path="/chart" component={Chart} />
      </div>
    )
  }
}

export default index