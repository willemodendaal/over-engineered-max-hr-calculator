import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './containers/app.jsx';

import { HashRouter } from 'react-router-dom';

//One global store for the entire app. It is updated by sending actions (via
//  react-redux) to the reducers in rootReducer.
const store = createStore(rootReducer);

render(
    //'Provider' links the Redux store to React, passing the store to all our container components.
    //'HashRouter' gives us React-Router capabilities (routing via url hash).
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('container')
);