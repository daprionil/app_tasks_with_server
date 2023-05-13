import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import '../public/index.css';
import store from './redux/store.js';
import { getTasks, getUsers } from './redux/createActions.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

//! Init Functions
store.dispatch(getUsers());
store.dispatch(getTasks());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);