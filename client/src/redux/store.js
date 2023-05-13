import thunk from 'redux-thunk';
import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from './reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));