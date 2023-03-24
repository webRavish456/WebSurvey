import React from "react";
import {ReactComponent as Brandlogo} from "../../assests/brand-logo.svg";


import "./footer.css";

const Footer=()=>
{
    return (
        <>
            <div className="footer">
            <div className="powered">
                <div>Powered by </div>
                <div><Brandlogo className="brandlogo"/></div>
                </div>
                <div className="divider">
               
        <div>Terms of Service</div>
        <div className="borderright">|</div>
        <div>Privacy Policy</div>
    
                   
                </div>
            </div>
        </>
    )
}

export default Footer;