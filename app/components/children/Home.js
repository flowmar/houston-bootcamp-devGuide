import React from 'react'
import { IndexLink, Link } from "react-router";
import Modal from 'react-modal';

import { Main } from "../Main";

export class Home extends React.Component {
    constructor() {
        super();
        this.state={
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
        
    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    
    render() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    {/* Navigation  */}
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">DevGuide</a>
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#">Home</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#" onClick={this.openModal}><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                    <li><a href="#" onClick={this.openModal}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>                    
                    {/* Jumbotron Section  */}
                    <div className="jumbotron"> 
                        <h1 className="text-center">
                            <strong>DevGuide</strong> 
                        </h1> 
                        <p className="text-center"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum nulla quis condimentum tincidunt. 
                            Fusce vitae iaculis orci. Pellentesque quis orci sapien. Etiam sodales mauris erat, rutrum rutrum orci tempor id. Donec at dolor sollicitudin mi ullamcorper porttitor. 
                            Ut at justo accumsan, luctus odio eget, efficitur felis. Morbi congue augue at tellus imperdiet, sit amet scelerisque turpis egestas. 
                            Morbi viverra, ligula nec ultricies tempus, sem purus gravida tortor, sed tristique lorem augue et elit. 
                            Vestibulum dictum ligula sed leo suscipit dictum. Nunc volutpat nibh eu eros malesuada lacinia. 
                            Donec porta malesuada sapien. Nunc facilisis, odio eget dapibus mattis, mauris arcu dignissim diam, sit amet ullamcorper nibh nibh aliquet nibh.
                        </p> 
                    </div> 
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal"
                        >
                        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                        <button onClick={this.closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
                      </Modal>
                </div>
            </div>
        )
    }
};