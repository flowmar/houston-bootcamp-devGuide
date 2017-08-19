import React from "react";
import { Link } from "react-router";
import Button from "./Button";

export class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    var logoStyle = {
      backgroundColor: "black",
      borderRadius: "40%",
      padding: ".9rem"
    };
    return (
      <div className="row z-depth-5 animated slideInDown">
        <div className="col-12">
          {/* Navigation  */}
          <nav id="mainNav" className="navbar">
            <div className="navbar-header">
              <a className="navbar-brand z-depth-1" href="#" style={logoStyle}>
                DevGuide Logo
              </a>
            </div>
            <div className="navbar-right animated fadeIn" id="myNavbar">
              <ul className="nav navbar-right list-inline">
                <li><Button href="#" className="btn btn-amber amber darken-3" text="New Project" onClick={this.toggleCollapse}/>
                </li>
                <li><Button className="btn btn-cyan" href="#" text="About Us" onClick={this.toggleCollapse}/>
                </li>
                <li><Button className="btn btn-amber amber darken-5" href="#" text="Getting Started" onClick={this.toggleCollapse}/>
                </li>
                <li><Button className="btn btn-secondary" text="New Button" href="#" onClick={this.toggleCollapse}/>
              </li></ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
