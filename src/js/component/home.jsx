import React from "react";
import Footer from "./footer.jsx";


import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
    return (
        <>
          
           <Navbar/>
           <Jumbotron/>
           <div className="d-flex">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Footer/>

           </div>
          
           
        </>
    );
};

export default Home;
