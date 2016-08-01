import React, { Component } from 'react';

export default class Timer extends Component {
	render(){
		return (
			<div className='circle' style={styles.circle} ></div>
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