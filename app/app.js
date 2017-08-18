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
import {Footer} from "./components/Footer"

const app =  document.getElementById("app");
ReactDOM.render (
    <BrowserRouter>
        <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Footer />
        </div>
    </BrowserRouter>,
    app
);