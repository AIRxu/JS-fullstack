import React from 'react';
import { Route } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import List from './List';
import Chart from './Chart';
//  <>组件： React.fragment

class index extends React.Component {
  render() {
    return (
      <>
        <HomeHeader />
        <Route path="/list" component />
        <Route path="/chart" component />
      </>
    )
  }
}

export default index