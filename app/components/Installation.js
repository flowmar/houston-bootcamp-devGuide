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
                    <div className="row" key={project._id}>
                        <div className="col-sm-8">
                            <br/>
                            <div className="card">
                                <h4 className="card-header">{project.todo} </h4>
                                <div className="card-body"> 
                                    <h4 className="card-title">Additional Resources For Help: </h4> 
                                    <h5 className="card-text">{"Description: " + project.resource[0].name}</h5>
                                    <h5 className="card-text">{"Description: " + project.resource[0].description}</h5> 
                                    <h5 className="card-text">{"Link: " + project.resource[0].link}</h5> 
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
            <div>
                 <br/><br/><br/>
                <h1> Installation Lifecycle</h1>
                {this.renderProjects()}
                 <br/>
                <div className="footerBtn">
                    <Link to="/project" className="btn btn-primary"> Back To Workflow </Link>
                    <Link to="#" className="btn btn-primary"> Coming Up Version Control</Link>
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


