
export const timerActions = {
	START_ROUND: 'START_ROUND',
	END_ROUND: 'END_ROUND',
	SET_ROUND_TIME: 'SET_ROUND_TIME',
	SET_BREAK_TIME: 'SET_BREAK_TIME'	
};

export function startRound(){
	return {
		type: timerActions.START_ROUND
	}
}

export function endRound(){
	return {
		type: timerActions.END_ROUND
	}
}

export function setRoundTime(time){
	return {
		type: timerActions.SET_ROUND_TIME,
		payload: {
			time: time
		}
	}
}

export function setBreakTime(time){
	return {
		type: timerActions.SET_BREAK_TIME,
		payload: {
			time: time
		}
	}
}