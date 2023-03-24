import React, {useState} from "react";
import {ReactComponent as Logo } from "../../assests/Ellipse.svg";
import {ReactComponent as Finger } from "../../assests/Vector.svg"
import "./code.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Code=()=>
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

        
     <div className="access1">
          <div className="backlogo1"><Logo/></div>
            <div className="finger1">
            <Finger/>
            </div>
            <div className="code1">
            <div className="accesscode1">
            <div className="acode1">User Credentials</div>
            <div className="ecode1">Enter your ID and PIN sent to you via email </div>
            </div>
            <div>
               <div className="encode1">ID</div>
             <div><input type="text" placeholder="Enter Code" onChange={(e)=>setcode(e.target.value)} required={true}/></div>
              {error?  <label>Please enter a valid ID</label>: ""}
              </div>
              <div>
               <div className="encode1">PIN</div>
             <div><input type="text" placeholder="Enter Code" onChange={(e)=>setcode(e.target.value)} required={true}/></div>
              {error?  <label>Please enter a valid PIN</label>: ""}
               </div>
               <div>
               <Button onClick={submit} variant="contained" style={{backgroundColor:"#348886", width:"100%"}}>Proceed</Button>
              </div>
            </div>
          </div>
     
         
       </>
   )
}

export default Code;
