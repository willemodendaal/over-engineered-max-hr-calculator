import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer';

//One global store for the entire app. It is updated by sending actions (via
//  react-redux) to the reducers in rootReducer.
const store = createStore(
	rootReducer,
	applyMiddleware(logger));

export default store;