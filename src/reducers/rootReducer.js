import {combineReducers } from 'redux';

const initialAuthState = 
{
	loggedIn: false,
	name: null,
	id: null
};
const reduceAuth = (oldState = initialAuthState, action) =>
{
	switch(action.type)
	{
		case 'DO_LOGIN':
			return Object.assign({}, oldState, {
				loggedIn: true //We'll do real login later.
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
