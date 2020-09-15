import React from 'react';
import ReactDOM from 'react-dom';
import './handlers/fontawesomeLib';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const initialState = { user: {}, preDesc: {}, skills: {}, claims: {}, about: {}, works: {}, hitos: {} };
const composeEnhacers = compose;

const store = createStore(reducer, initialState, composeEnhacers(applyMiddleware(thunk)));




import App from './routes/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));

