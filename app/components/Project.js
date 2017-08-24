import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

class Project extends Component {
    componentDidMount() {
        //console.log(this.props.fetchProjects());
        this.props.fetchProjects();
    }
    render() {
        return(
            <div className="row">
                <div className="col">
                    <br/><br/><br/>
                    <div className="card">
                        <h4 className="card-header bg-amber darken-3">TODO: </h4>
                        <div className="card-body">
                            <h4 className="card-title">Additional Resources</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-amber">Go somewhere</a>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, {fetchProjects})(Project);