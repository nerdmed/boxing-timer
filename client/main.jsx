import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Meteor } from 'meteor/meteor';

import App from '/imports/ui/app.jsx';
import appReducer from '/imports/api/reducers/appReducer';

let store = createStore(appReducer)

Meteor.startup(() => {
  render(<App />, document.getElementById('app-wrapper'));
});

global.store = store;