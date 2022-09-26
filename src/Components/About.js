import React from "react";

export default function About(props) {
  return (
    <div className="container" style={{color : props.mode==='dark'? 'white':'black'}}>
        <h1>About Us</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4" >
        <div className="col">
          <div className="card h-100" style={{backgroundColor: props.mode==='dark'? 'gray':"white" ,color : props.mode==='dark'? 'white':'black'}}>
            <img src={"1616968934968.jpg"} className="card-img-top" alt="Devloper" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{backgroundColor: props.mode==='dark'? 'gray':"white" ,color : props.mode==='dark'? 'white':'black'}}>
            <img src={"1635754296733.jpg"} style={{height: '75%'}} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100" style={{backgroundColor: props.mode==='dark'? 'gray':"white" ,color : props.mode==='dark'? 'white':'black'}}>
            <img src={"1632422818623.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
