import React from 'react';
import propTypes from 'prop-types'; // 用于校验所有的参数类型 props
import Header from './Header';

// 开发流程
// 1. 拿到beerid  渲染数据

class Single extends React.Component {
  static propTypes = {
    params: propTypes.object
  }
  constructor () {
    super();
    this.state = {
      beer: {},
      loading: true  // 2 react 业务经验
    }
  }
  // StatefulComponent StatelesComponent
  componentDidMount () {
    // console.log(`searching for ${this.props.match.params.beerId}`);
    this.loadBeer(this.props.match.params.beerId);

  }
  loadBeer = (beerId) => {
    this.setState({
      loading: true
    })
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(data => data.json())
    .then(res => {
      this.setState({
        beer: res.data,
        loading: false
      })
    })
  }
  render() {
    console.log(this.props);
    if (this.state.loading) {
      return <div>loading...</div>
    }
    const { beer } = this.state;
    return(
      <div>
        <Header siteName="Beer me!"></Header>
        <div className="single-beer">
          <div className="desc">
            <h2>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>
          <img className="label" src={beer.labels.large} alt="" />
            <h3>More Info on {beer.style.name}</h3>
            <p>{beer.style.description}</p>
        </div>
      </div>
    )
  }
}

export default Single;