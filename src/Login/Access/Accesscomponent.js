import React, { useState }  from "react";
import "./access.css";
import {ReactComponent as Logo } from "../../assests/Ellipse.svg";
import {ReactComponent as Finger } from "../../assests/Vector.svg"

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Access=()=>
{


     const  navigate= useNavigate();
     const [error, seterror] = useState(false)
    const [code, setcode]=useState('');

     const submit=(e)=>
     {
         e.preventDefault();
         if(code.length===0)
         {
            seterror(true);
         }
         else {
          navigate("/ques")
         }
     }
    return(
        <>

         
      <div className="access">
           <div className="backlogo"><Logo/></div>
             <div className="finger">
             <Finger/>
             </div>
             <div className="code">
             <div className="accesscode">
             <div className="acode">Access Code</div>
             <div className="ecode">Enter your access code which you have received on your email address.</div>
             </div>
             <div>
                <div className="encode">Enter Code</div>
              <div><input type="text" placeholder="Enter Code" onChange={(e)=>setcode(e.target.value)} required={true}/></div>
               {error?  <label>Please enter a valid Code</label>: ""}
                </div>
                <Button onClick={submit} variant="contained" style={{backgroundColor:"#348886", width:"100%"}}>Proceed</Button>
            
             </div>
           </div>
      
          
        </>
    )
}

export default Access;
