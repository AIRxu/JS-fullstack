import { fromJS } from 'immutable';
import { GET_HOME_LIST } from '../../constants'
const defaultState = fromJS({
  homeList: []
})
export default function (state = defaultState, action) {
  console.log(action.homeList);
  switch (action.type) {
    case GET_HOME_LIST:
      return {
        homeList: action.homeList
      }
    default:
      return defaultState
  }
}