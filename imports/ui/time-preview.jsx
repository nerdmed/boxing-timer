import React, { Component, PropTypes } from 'react';

export default class TimePreview extends Component {
	render(){
		return (
				<div className='time-preview' style={getTimePreviewStyle(this.props.type)}>
					{this.props.time}
				</div>
			)
	}
}

TimePreview.propTypes = {
	time: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired
}


import { fightColor, breakColor, lightText } from './global-style.js';


function getTimePreviewStyle(type){
	return {
		...lightText,
		width: '50%',
		backgroundColor: type === 'round' ? fightColor : breakColor
	}
}