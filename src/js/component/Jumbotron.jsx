import React from "react";


//create your first component
const Jumbotron = () => {
    return (
        <>
          <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h1 className="card-title">A Warn Welcome!</h1>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi perspiciatis fugit illum eius omnis iure cum temporibus laborum repellendus! Minus inventore dolores totam ex iusto enim impedit exercitationem doloremque.</p>
    <a href="#" className="btn btn-primary">Call to action!</a>
  </div>
</div>
        </>
    );
};

export default Jumbotron;
