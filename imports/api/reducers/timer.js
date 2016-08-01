import { timerActions } from '../actions/timer-actions.js';

const timer = (state = {}, action) => {
	const newState = { ...state };

	console.log(action);

	switch(action.type){
		case timerActions.START_ROUND:
			newState.running = true;
			newState.startTime = new Date();
			break;
		case timerActions.END_ROUND:
			newState.running = false;
			break;
		case timerActions.SET_ROUND_TIME:
			newState.roundTime = action.payload.time;
			break;
		case timerActions.SET_BREAK_TIME:
			newState.breakTime = action.payload.time;
			break;
	}

	return newState;
}

export default timer;