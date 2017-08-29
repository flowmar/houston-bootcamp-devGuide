import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { fetchInstallation } from '../actions';

class Installation extends Component {
    componentDidMount() {
        this.props.fetchInstallation();
    }

    renderProjects() {
        return this.props.projects.map(function(project, key)  {
            if(project.lifecycle === "Installation") {
                return (
                    <div className="row justify-content-center" key={project._id}>
                        <div className="col-6">
                            <br/>
                            <div className="card z-depth-5 hoverable blue-grey lighten-4 animated rollIn">
                                <p className="display-5 font-weight-bold shadow-white card-header text-center">{project.todo} </p>
                                <div className="card-body">
                                    <p className="card-title text-center">Additional Resources For Help: </p>
                                    <p className="card-text text-center dark-grey-text">{project.resource[0].name}</p>
                                    <p className="card-text dark-grey-text font-weight-bold text-center">{project.resource[0].description}</p>
                                    <a className="card-text" href={project.resource[0].link}>
                                    <button className="btn btn-orange btn-block">{project.resource[0].name}
                                    </button></a>
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
            <div className="card teal lighten-2 animated slideInRight">
                <br />
                <br />
                <br />
                <div className="row justify-content-center">
					<div className="col text-center">
                        <p className="display-2 deep-orange-text shadow-black font-weight-bold"> Installation Phase</p>
                    </div>
                </div>
                {this.renderProjects()}
                 <br/>
                 <div className="row justify-content-end">
                <div className="col"/>
					<div className="col-8">
                        <Link to="/project" className="btn btn-primary"> Back To Workflow </Link>
                        <Link to="/project/deployment" className="btn btn-primary"> Coming Up Deployment</Link>
                        <div className="col"/>
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

export default connect(mapStateToProps, {fetchInstallation})(Installation);


