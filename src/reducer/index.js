import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './home';
import series from './series';

export default history =>
	combineReducers({
		router: connectRouter(history),
		home,
		series,
	});
