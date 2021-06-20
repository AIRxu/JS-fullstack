import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import { Tabs, Row, Col, Tag } from 'antd'
import { Pagination } from 'antd'

const { TabPane } = Tabs;
// 想要哪个页面的数据就注入谁
@inject('articleStore')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.articleStore.getArticle('all');
    this.props.articleStore.getTags();
  }
  handlePaginationChange = (page) => {
    this.props.articleStore.getArticle('all', page - 1);
  }
  render() {
    const { total, LIMIT, articles, handleTabChange, tags } = this.props.articleStore;
    return (
      <div>
        <Row>
        <Col span={19}>
          <Tabs defaultActiveKey={'all'} onChange={handleTabChange}>
            {Object.keys(articles).map((tag, i) => {
              return (
                <TabPane key={tag} tab={tag}>
                  {
                  articles[tag].map((article, i) => {
                    return (
                      <div>
                        <h3>
                          {article.title}
                        </h3>
                        <p>
                          {article.body}
                        </p>
                      </div>
                    )
                  })
                  }
                </TabPane>
              )
            })}
          </Tabs>
          {this.props.articleStore.articles.all.length}
          <Pagination
            onChange={this.handlePaginationChange}
            total={total}
            pageSize={LIMIT}
            defaultCurrent={1} />
        </Col>
        <Col span={5}>
            {tags.map((tag, i) => {
              return (
                <Tag key={i}>{tag}</Tag>
              )
            })}
        </Col>
        </Row>
      </div>
    );
  }
}

export default Home;