import { combineReducers } from 'redux'
import { apiReducer } from './apiReducer'
import { anotherReducer } from './anotherReducer'

export default combineReducers({
  apiReducer,
  anotherReducer
})
