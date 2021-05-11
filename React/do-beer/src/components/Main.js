import React from 'react';
import Search from './Search';
import Results from './Results';
import Header from './Header';
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
  componentDidUpdate(prevProps) {
    // console.log('did update');
    // console.log(prevProps);
    const currentSearchTerm = this.props.match.params.searchTerm; // 新的参数
    const oldSearchTerm = prevProps.match.params.searchTerm; // 旧的参数
    // console.log(oldSearchTerm, currentSearchTerm);
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeer(currentSearchTerm);
    }
  }
  //  = hops 在业务上有什么用
  // es6 概念 默认赋值
  loadBeer(searchTerm = 'hops') {
    // fetch
    // 性能优化：如果本地有，那就直接用吧
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({
        beers: localBeers,
        loading: false
      })
      return;
    }
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then( data => data.json())
    .then( data => {
      const beers = data.data || [];
      this.setState({
        loading: false,
        beers
      })
      // 业务相关，searchTerm的变化
      localStorage.setItem(
        `search-${searchTerm}`,
        JSON.stringify(this.state.beers)
      )
      // console.log(data);
    })
  }
  render() {
    return(
      // 集列表、搜索于一体
      <div>
        <Header siteName="Beer me!"></Header>
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
}

export default Main;