import {combineReducers } from 'redux';

const initialAuthState = 
{
	loggedIn: false,
	name: null,
	id: null,
	message: null,
	busyLoggingOut: false
};
const reduceAuth = (oldState = initialAuthState, action) =>
{
	switch(action.type)
	{
		case 'LOGIN_COMPLETE':
			return Object.assign({}, oldState, {
				message: null,
				loggedIn: true,
				busyLoggingOut: false
			});
		case 'LOGOUT_START':
			return Object.assign({}, oldState, {
				message: 'Logging out...',
				loggedIn: true,
				busyLoggingOut: true
			});
		case 'LOGOUT_COMPLETE':
			return Object.assign({}, oldState, {
				loggedIn: false,
				error: null,
				busyLoggingOut: false,
				message: null
			});
		case 'LOGOUT_FAILED':
			return Object.assign({}, oldState, {
				message: action.error,
				loggedIn: true,
				busyLoggingOut: false
			});
	}
	return oldState;
}

const initialCalculatorState = 
{
	age: null, 
	maxHr: null 
};
const reduceCalculator = (oldState = initialCalculatorState, action) =>
{
	//Not doing any calculator logic yet.
	return oldState;
}

export default combineReducers({
	auth: reduceAuth,
	calculator: reduceCalculator
});
