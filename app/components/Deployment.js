import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchDeployment } from '../actions';

class Deployment extends Component {
    componentDidMount() {
        this.props.fetchDeployment();
    }
    renderProjects() {
        return this.props.projects.map(function(project, key)  {
            if(project.lifecycle === "Deployment") {
                return (
                    <div className="row justify-content-center" key={project._id}>
                        <div className="col-6">
                            <br/>
                            <div className="card z-depth-5 hoverable blue-grey lighten-4 animated rollIn text-center">
                                <p className="card-header text-center display-5 font-weight-bold shadow-white">{project.todo} </p>
                                <div className="card-body">
                                    <p className="card-title text-center">Additional Resources For Help: </p>
                                    <p className="card-text text-center dark-grey-text">{project.resource[0].name}</p>
                                    <p className="card-text dark-grey-text font-weight-bold text-center">{project.resource[0].description}</p>
                                    <p className="card-text">
                                        <a href={project.resource[0].link}>
                                            <button className="btn btn-cyan btn-block">{project.resource[0].name}</button></a></p>
                                <br/>
                                </div>
                                </div>
                            </div>
                        </div>
                )
            }
        })
    }

    render() {
        return(
            <div className="card deep-orange darken-2 animated slideInDown">
                 <br/><br/><br/>
                 <div className="row justify-content-center">
					<div className="col text-center" >
                        <p className="display-2 deep-purple-text shadow-black font-weight-bold"> Deployment Phase</p>
                    </div>
                </div>
                {this.renderProjects()}
                 <br/>
                <div className="row justify-content-end">
					<div className="col-7">
                        <Link to="/project/installation" className="btn btn-primary"> Back To Installation </Link>
                    </div>
                </div>
                 <br/><br/><br/>
            </div>

        )
    }
};


// Connect helper
// Make Navbar aware if the user is logged in by hooking it up to the redux store.
// pull off the auth piece of state
function mapStateToProps({projects}) {
    return { projects };
}

export default connect(mapStateToProps, {fetchDeployment})(Deployment);