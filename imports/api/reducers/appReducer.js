import { combineReducers } from 'redux'
import timer from './timer.js'

const appReducer = combineReducers({
  timer,
})

export default appReducer;