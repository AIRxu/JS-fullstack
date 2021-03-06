import React from 'react';
import {Provider} from 'mobx-react'
import {Layout, Row, Col} from 'antd'
import articleStore from './store/articleStore'
import Home from './pages/home/index'
import './App.css';
import './utils/request'

// 每一个模块都对应一个store
const { Header, Content, Footer } = Layout;
const store = {
  articleStore
}
function App() {
  return (
    <Provider {...store}>
      <Layout>
        <Header>
        </Header>
        <Content className="site-layout">
          <Row>
            <Col offset={3} span={18}>
              <Home />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
