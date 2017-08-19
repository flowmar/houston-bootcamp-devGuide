import React from "react";

export class Landing extends React.Component {
  render() {
    return (
      <div className="landing row z-depth-3 animated slideInRight">
        {/* Jumbotron Section  */}
        <div className="card col blue-grey lighten-4">
          <div className="card-body">
            <h1 className="display-3 text-center card-title">DevGuide!</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rutrum nulla quis condimentum tincidunt. Fusce vitae iaculis orci.
              Pellentesque quis orci sapien. Etiam sodales mauris erat, rutrum
              rutrum orci tempor id. Donec at dolor sollicitudin mi ullamcorper
              porttitor. Ut at justo accumsan, luctus odio eget, efficitur
              felis. Morbi congue augue at tellus imperdiet, sit amet
              scelerisque turpis egestas. Morbi viverra, ligula nec ultricies
              tempus, sem purus gravida tortor, sed tristique lorem augue et
              elit.
            </p>
            <blockquote className="blockquote bq-info">
              <p className="bq-title">Info notification</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores quibusdam dignissimos itaque harum illo! Quidem,
                corporis at quae tempore nisi impedit cupiditate perferendis
                nesciunt, ex dolores doloremque! Sit, rem, in?
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}
