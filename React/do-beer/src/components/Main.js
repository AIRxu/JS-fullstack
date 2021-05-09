import React from 'react';
import Search from './Search';
import Results from './Results';
class Main extends React.Component {
  // StatefulComponent StatelesComponent
  constructor () {
    super();
    this.state = {
      beers: [],
      loading: true  // 正在加载中
    }
  }
  // URL不一样
  componentDidMount () {
    // 当url为 / 时，展示所有啤酒
    // 当url为 /search/:searchTerm 时，展示searchTerm的啤酒
    console.log(this.props.match.params);
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeer(searchTerm);
  }
  //  = hops 在业务上有什么用
  // es6 概念 默认赋值
  loadBeer(searchTerm = 'hops') {
    // fetch
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then( data => data.json())
    .then( data => {
      const beers = data.data || [];
      this.setState({
        loading: false,
        beers
      })
      console.log(data);
    })
  }
  render() {
    return(
      // 集列表、搜索于一体
      <div>
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
}

export default Main;