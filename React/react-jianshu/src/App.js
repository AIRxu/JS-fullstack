import ImmutableComponent from './components/common'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Header from './components/Header/Header'
import Home from './pages/home'
import Detail from './pages/detail'
// import { fromJS } from '_immutable@4.0.0-rc.12@immutable';


class App extends ImmutableComponent {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Header />
          {/* / */}
          {/* /detail有包含关系,记得加exact */}
          <Route path="/" component={Home} exact />
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
