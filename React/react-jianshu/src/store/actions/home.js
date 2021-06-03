import { fromJS } from '_immutable@4.0.0-rc.12@immutable'
import { GET_HOME_LIST } from '../constants'
// 一个action应该是一个对象
// {
//   type: 'GET_HOME_LIST'
//   xxx:
// }
// redux 中间件：不同的action
// redux-thunk支持action是函数

// export const getHomeList = {
//     type: GET_HOME_LIST
// }
// 负责创建一个action
export const homeListActionCreator = (homeList) => ({
    type: GET_HOME_LIST,
    homeList
})