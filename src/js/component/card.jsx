import React from "react";


//create your first component
const Card = () => {
    return (
        <div className="container text-center">
            
           <h1>Card</h1>
           <div className="card" style={{width: "18rem"}}>
             <img src="..." className="card-img-top" alt="..."/>
             <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, quasi adipisci? Reiciendis tempora perspiciatis, aliquid maxime repellendus repellat, quasi labore ab exercitationem eligendi sint, voluptas itaque in provident explicabo! Eveniet.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </div>
    );
};


export default Card;
