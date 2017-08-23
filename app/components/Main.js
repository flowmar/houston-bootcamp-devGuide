import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <div className="landing row z-depth-3 animated slideInRight">
        {/* Jumbotron Section  */}
        <div className="card col blue-grey lighten-4">
          <div className="card-body">
            <h1 className="display-3 text-center card-title">DevGuide!</h1>
            <p className="text-center">
              Welcome to DevGuide! We created this application to help developers ensure that
              they create projects that are carefully planned, version controlled, documented
              and complete. Our goal is to enforce project best practices by providing a
              guided walkthrough of the software development lifecycle, alongside useful
              resources for each step.
            </p>
            <blockquote className="blockquote bq-info">
              <p className="bq-title">Info notification</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quibusdam
                dignissimos itaque harum illo! Quidem, corporis at quae tempore nisi impedit
                cupiditate perferendis nesciunt, ex dolores doloremque! Sit, rem, in?
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}
