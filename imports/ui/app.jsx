import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timer from './timer.jsx';
import TimePreview from './time-preview.jsx';

class TimerApp extends Component{ 

	render() {
		console.log(this.props);
		return (
			<div className="container">
			        <header style={styles.header}>
			        	<Timer/>
			        </header>
			        <footer style={styles.footer}>
			        	<TimePreview time={this.props.roundTime} type='round' />
			        	<TimePreview time={this.props.breakTime} type='break' />
			        </footer>
			 </div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		roundTime: state.timer.roundTime,
		breakTime: state.timer.breakTime
	}
};

let App = connect(
  mapStateToProps
)(TimerApp)

export default App;


import { background, fightColor } from './global-style.js';

const footerHeight = 12;
const styles = {
	header: {
		height: `${100-footerHeight}vh`,
		width: '100%',
		backgroundColor: background,
	},
	footer: {
		display: 'flex',
		height: `${footerHeight}vh`,
		width: '100%'
	}
}