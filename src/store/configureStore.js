import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createReducer from '../reducer';
import { routerMiddleware } from 'connected-react-router';

export default function configureStore(browserHistory) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		createReducer(browserHistory),
		composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)))
	);
	return store;
}
