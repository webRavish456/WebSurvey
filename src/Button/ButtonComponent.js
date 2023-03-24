import React, { useState } from "react";
import "./button.css";
import Modal from '@mui/material/Modal';
import Access from "../Login/Access/Accesscomponent";
import Code from "../Login/Code/codecomponent";
import Credential from "../Login/Credentials/credentials";


const Button =()=>
{
    const [open, setOpen] = useState(false);
 
    const handleopen = () => {
        setOpen(true);
    }
    
    const handleClose=()=> setOpen(false);
    return (
        <>
            <button className="button" onClick={handleopen}>Start Survey</button>

           <Modal open = {open} onClose={handleClose}>
             <Access/>
            </Modal>
          
        </>
    )
}

export default Button;
// <Credential/>
//<Code/>
