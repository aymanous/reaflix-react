import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Navigator from './containers/Navigator';
import configureStore from './store/configureStore';

// On crée le store en lui fournissant le "reducer"
// const store = createStore( reducer );
//
// Pour pouvoir utiliser les Redux Devtools, redux-thunk, etc.
// la syntaxe devient plus complexe, on l'externalise dans un module configureStore
const store = configureStore();

render(
	<Provider store={store}>
		<Navigator />
	</Provider>,
	document.querySelector('.appContainer')
);
