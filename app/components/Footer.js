import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid z-depth-5">
                <div className="row">
                    <footer
                        className="fixed-bottom card col text-center animated indigo darken-4 slideInLeft p-5">
                        <p className="text-muted">©2017 DevGuide</p>
                    </footer>
                </div>
            </div>
        );
    }
}