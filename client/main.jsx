import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import { Meteor } from 'meteor/meteor';

import App from '/imports/ui/app.jsx';
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


Meteor.startup(() => {
  render(
  	<Provider store={store}>
  		<App />
  	</Provider>
  	, document.getElementById('app-wrapper'));
});

global.store = store;