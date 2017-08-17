import React from 'react';
import ReactDOM from 'react-dom';
// Include the react-router module
// Include the Route component for displaying individual routes
// Include the Router component to contain all our Routes
// Include the hashHistory prop to handle routing client side without a server
// Include the IndexRoute (catch-all route)
import { BrowserRouter, Route } from 'react-router-dom'

// Reference the high-level components
import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";

const app =  document.getElementById("app");
ReactDOM.render (
    <BrowserRouter>
        <div className="container">
            <Navbar />
            <Route exact path="/" component={ Landing } />
        </div>
    </BrowserRouter>, 
    app
);