import React from 'react';
import './App.css';
import Header from './components/Header.jsx'


class App extends React.Component {
  // 什么行为会引发 组件重新渲染
  state = {
    title:'123'
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        title:'1234'
      })
    }, 3000)
  }
  render() {
    return (
      <div>
        123456
        <Header title={this.state.title}/>
      </div>
    )
  }
}

export default App;
