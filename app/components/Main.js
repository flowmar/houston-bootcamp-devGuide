// Include React
import React from 'react'

// Include Children
import { Home } from "./children/Home";

export class Main extends React.Component {
    

    //===============================================================
    render() {
        return (
            <div className="container">
                <div className="home-section">
                    <Home />
                </div>
            </div>
        )
    }
};