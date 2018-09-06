import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
registerServiceWorker();

