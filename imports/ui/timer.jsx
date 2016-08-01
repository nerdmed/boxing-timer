import React, { Component } from 'react';
import store from '/imports/api/store';
import { startRound } from '/imports/api/actions/timer-actions.js';

export default class Timer extends Component {
	startRound() {
		store.dispatch(startRound());
	}

	render(){
		return (
			<div className='circle' style={styles.circle} onClick={this.startRound}></div>
		)
	}
}

import { middle, fightColor } from './global-style.js';

const circleSize = 200;
const styles = {
	circle: {
		...middle,
		top: '-10%',
		width: circleSize,
		height: circleSize,
		backgroundColor: fightColor,
		borderRadius: circleSize/2
	}
}