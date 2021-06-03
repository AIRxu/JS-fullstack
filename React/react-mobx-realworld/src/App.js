import React from 'react';
import {Provider} from 'mobx-react'
import articleStore from './store/articleStore'
import Home from './pages/home/index'
import './App.css';
import './utils/request'

const store = {
  articleStore
}
function App() {
  return (
    <Provider {...store}>
      <Home />
    </Provider>
  );
}

export default App;
