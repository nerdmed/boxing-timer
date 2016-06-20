import { combineReducers } from 'redux'
import timer from './timer'

const appReducer = combineReducers({
  timer,
})

export default appReducer;

