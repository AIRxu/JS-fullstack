import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants'
const defaultState = fromJS({
  homeList: []
})
export default function (state = defaultState, action) {
  // console.log(action.homeList);
  // console.log(action);
  switch (action.type) {
    case GET_HOME_LIST:
      const newHomeList = action.homeList;
      return state.set('homeList', newHomeList);
      // return {
      //   homeList: action.homeList
      // }
    default:
      return defaultState
  }
}