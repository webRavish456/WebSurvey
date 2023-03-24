import React, {useState} from "react";
import {ReactComponent as Logo } from "../../assests/Ellipse.svg";
import {ReactComponent as Finger } from "../../assests/Vector.svg"
import "./credentials.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Credential=()=>
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

        
     <div className="access2">
          <div className="backlogo2"><Logo/></div>
            <div className="finger2">
            <Finger/>
            </div>
            <div className="code2">
            <div className="accesscode2">
            <div className="acode2">User Credentials</div>
            <div className="ecode2">Enter your Password </div>
            </div>
              <div>
               <div className="encode2">Password</div>
             <div><input type="text" placeholder="Enter Code" onChange={(e)=>setcode(e.target.value)} required={true}/></div>
              {error?  <label>Please enter a valid Password</label>: ""}
               </div>
               <div>
               <Button onClick={submit} variant="contained" style={{backgroundColor:"#348886", width:"100%"}}>Proceed</Button>
              </div>
            </div>
          </div>
     
         
       </>
   )
}

export default  Credential;