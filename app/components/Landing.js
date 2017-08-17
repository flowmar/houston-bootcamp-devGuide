import React from 'react'

export class Landing extends React.Component {
   
    render() {
        return(
            <div className="row">
                <div className="col-sm-12">                  
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
                </div>
            </div>
        )
    }
};