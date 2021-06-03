import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '_axios@0.21.1@axios';
import { fromJS } from '_immutable@4.0.0-rc.12@immutable';
import { homeListActionCreator } from '../../store/actions/home'
class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList();
  }
  state = {}
  render() {
    return (
      <div>
        Home
        legth: {this.props.homeList.size}
      </div>
    );
  }
}

// 获取数据
// state：整个store的数据你都可以拿到 但是我只要home模块的数据，过滤一下
// 过滤完的结果(return)都会由connect的返回值 传给你组件的props
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    homeList: state.getIn(['home', 'homeList'])
  }
}

// 用户操作 UI 引起页面的变化
// 用dispatch发起一个action
// 使用中间件 react-thunk 可以让dispatch接收一个函数，而不是只能接收一个对象
// 用 connect 将 dispatch 传给组件，这样组件才能知道发生了什么行为
const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    fetchHomeList() {
      axios.get('home/home.json')
      .then( (res) => {
        // console.log(res);
        const homeList = res.data;
        // 将homeList传到action不能用直接覆盖的方法
        // 会有数据耦合
        // 应该将action内的功能定义为一个函数接收参数
        // 而不是定义成一个对象被fetchHomeList修改
        // getHomeList.homeList = fromJS(homeList);
        let action = homeListActionCreator(fromJS(homeList));
        dispatch(action);
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);