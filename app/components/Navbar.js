import React from 'react'
import { Link } from "react-router";

export class Navbar extends React.Component {
    constructor(){
            super()
            this.state = {
                collapsed: true
            };

            this.toggleCollapse = this.toggleCollapse.bind(this);
        }

        toggleCollapse() {
            const collapsed = !this.state.collapsed;
            this.setState({collapsed});
    }

        render() {
            var logoStyle = {
                backgroundColor: 'black',
                borderRadius: '40%',
                padding: '.9rem'
            }
        return(
            <div className="row z-depth-5 animated slideInDown">
                <div className="col-12">
                    {/* Navigation  */}
                    <nav id="mainNav" className="navbar">
                        <div className="navbar-header">
                            <a className="navbar-brand " href="#" style={logoStyle}>DevGuide Logo</a>
                        </div>
                        <div className="navbar-right animated fadeIn" id="myNavbar">
                            <ul className="nav navbar-right list-inline">
                                <li className="btn btn-amber amber darken-2"><a href="#" onClick={this.toggleCollapse}><span className=" fa fa-tasks"></span>New Project</a></li>
                                <li className="btn btn-cyan"><a href="#" onClick={this.toggleCollapse}><i className="fa fa-bolt"></i> About Us</a></li>
                                <li className="btn btn-amber amber darken-5"><a href="#">Getting Started</a></li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        )
    }
};