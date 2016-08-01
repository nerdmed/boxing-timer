import { createStore, compose } from 'redux';

import appReducer from '/imports/api/reducers/appReducer';
import { setRoundTime, setBreakTime } from '/imports/api/actions/timer-actions.js';

function configureStore(initialState = {}) {
    const store = createStore(appReducer, initialState, compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
  }

let store = configureStore();

store.dispatch(setRoundTime(45));
store.dispatch(setBreakTime(30));

export default store;