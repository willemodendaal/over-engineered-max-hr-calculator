import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './containers/app.jsx';
import Store from './store/store'

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