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
        return(
            <div className="row">
                <div className="col-sm-12">
                    {/* Navigation  */}
                    <nav id="mainNav" className="navbar navbar-custom navbar-inverse">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">DevGuide</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="hidden"><a href="#"></a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#" onClick={this.toggleCollapse}><span className="glyphicon glyphicon-tasks"></span>New Project</a></li>
                                <li><a href="#" onClick={this.toggleCollapse}><span className="glyphicon glyphicon-flash"></span> About Us</a></li>
                            </ul>
                        </div>
                        
                    </nav>                    
                </div>
            </div>
        )
    }
};