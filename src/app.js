import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import Navigator from './containers/Navigator';
import Menu from './components/Menu';
import configureStore from './store/configureStore';

const browserHistory = createBrowserHistory();
const store = configureStore(browserHistory);

render(
	<Provider store={store}>
		<ConnectedRouter history={browserHistory}>
			<Menu />
			<Navigator />
		</ConnectedRouter>
	</Provider>,
	document.querySelector('.appContainer')
);
