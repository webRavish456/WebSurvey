import React from "react";
import {ReactComponent as Brandlogo} from  "../../assests/brand-logo.svg";
import "./header.css";

const Header=()=>
{
    return (
        <>
            <div className="logo">
              <Brandlogo/>
             </div>
        </>
    )
}

export default Header;
