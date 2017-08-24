import React, { Component } from 'react';
// Include the Route component for displaying individual routes
// Include the BrowserRouter prop to handle routing client side without a server
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';  //> gives certain components the ability to call action creators.
import * as actions from '../actions';

// Reference the high-level components
import Navbar from "./Navbar";
import Main  from "./Main";
import Footer from "./Footer"
import Project from "./Project";
import Installation from "./Installation";

class App extends Component {
    // when the app boots up, call our action creator to fetch the current user.
    // the action creator will make the initial AJAX request.
    componentDidMount() {
        this.props.fetchUser();  //> name of the action creator
    }

    render() {
        return(
            <div className="container-fluid">
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route exact path='/' component={ Main } />
                        <Route exact path='/project' component={ Project } />
                        <Route exact path='/project/installation' component={ Installation } />
                        {/* <Footer /> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    };
};

export default connect(null, actions)(App);