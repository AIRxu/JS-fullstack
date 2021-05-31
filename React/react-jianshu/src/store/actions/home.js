import { GET_HOME_LIST } from '../constants'
// 一个action应该是一个对象
// {
//   type: 'GET_HOME_LIST'
//   xxx:
// }
// redux 中间件：不同的action
// redux-thunk支持action是函数

// export const getHomeList = () => {
//   console.log('1');
// }

export const getHomeList = (homeList) => {
  homeList = {
    type: GET_HOME_LIST,
    homeList: [0, 1, 2, 3]
  }
}