import { combineReducers } from 'redux-immutable';
import { createStore, 
  // combineReducers,
   applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';


const rootReducer = combineReducers({
  home: HomeReducer
})
// state = { title: fromJS() }
// 这一层没法转换
// HomeReducer数据 已经是immutable了
// rootReducer数据还是原生js

export default createStore(rootReducer, applyMiddleware(thunk))