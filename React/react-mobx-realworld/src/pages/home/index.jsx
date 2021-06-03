import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import {Pagination} from 'antd'

// 想要哪个页面的数据就注入谁
@inject('articleStore')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.articleStore.getArticle('all')
  }
  handlePaginationChange = (page) => {
    this.props.articleStore.getArticle('all', page - 1);
  }
  render() {
    const {total, LIMIT} = this.props.articleStore;
    return (
      <div>
        {this.props.articleStore.articles.all.length}
        <Pagination
        onChange={this.handlePaginationChange}
        total={total}
        pageSize={LIMIT}
        defaultCurrent={1}/>
      </div>
    );
  }
}
 
export default Home;