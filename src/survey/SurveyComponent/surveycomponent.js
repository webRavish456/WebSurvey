import React from "react";
import "./survey.css" ;
import  Header from "../Header/headercomponent.js";
import Live from "../Live/Livecomponent";
import Footer from "../Footer/footercomponent";

const Survey = ()=>
{
    return (
        <>
         
             <Header/>
             <Live/>
             <div className="Footer">
             <Footer/>
             </div>
              
             
        </>
    )
}

export default Survey;

