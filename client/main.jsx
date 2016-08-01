import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { Meteor } from 'meteor/meteor';

import App from '/imports/ui/app.jsx';

import store from '../imports/api/store.js';

Meteor.startup(() => {
  render(
  	<Provider store={store}>
  		<App />
  	</Provider>
  	, document.getElementById('app-wrapper'));
});