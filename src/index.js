import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './containers/app.jsx';
import Store from './store/store'

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('serviceWorker.js')
	.then(function(reg) {
		console.log('Service worker registration succeeded. Scope is ' + reg.scope);
	}).catch(function(error) {
		console.log('Service worker registration failed with:', error);
	});
}

render(
	//'Provider' links the Redux store to React, passing the store to all our container components.
	//'HashRouter' gives us React-Router capabilities (routing via url hash).
	<Provider store={Store}>
		<HashRouter>
			<App/>
		</HashRouter>
	</Provider>,
	document.getElementById('container')
);