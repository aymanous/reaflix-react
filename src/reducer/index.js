import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './home';
import series from './series';
import serie from './serie';
import episodes from './episodes';

export default history =>
	combineReducers({
		router: connectRouter(history),
		home,
		series,
		serie,
		episodes,
	});
