import React, { Component } from 'react';

export class Form extends Component {
    render() {
        return (
            <div className="row" >
                <div className="col text-right mr-3">
                    <h1 className="display-4 font-weight-bold">{"     "}Add Game</h1>
                    <form role="form" onSubmit={this.handleSubmit} className="ml-2 text-right">
                        <div className="form-group">
                            <input
                                type="text"
                                ref="imageUrl"
                                className="form-control"
                                placeholder="Image URL" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer1"
                                className="form-control"
                                placeholder="Answer 1" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer2"
                                className="form-control"
                                placeholder="Answer 2" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer3"
                                className="form-control"
                                placeholder="Answer 3" />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                ref="answer4"
                                className="form-control"
                                placeholder="Answer 4" />
                        </div>
                        <button type="submit" className="btn btn-mdb-color">Submit</button>
                    </form>
                </div> </div>
        );
    }
}