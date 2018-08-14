import {combineReducers } from 'redux';
import reduceAuth from './authReducer';
import reduceCalculator from './calculatorReducer';

export default combineReducers({
	auth: reduceAuth,
	calculator: reduceCalculator
});
