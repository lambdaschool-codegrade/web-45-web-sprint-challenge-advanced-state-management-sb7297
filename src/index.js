import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';

import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");
const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.