// Include the React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// This code here allows us to render our main component (in this case "Parent")
ReactDOM.render(
    // Provider is a component that makes store accessible to ever component
    <Provider store={store}><App /></Provider>, 
    document.getElementById("app")
);