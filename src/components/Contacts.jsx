import React from 'react';
import { makeStyles,withStyles } from "@material-ui/core/styles";
import {
TextField,

Grid,

Box
}from "@material-ui/core";

import Navbar from './Navbar';

const useStyles=makeStyles((theme)=>({
    form:{
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        position:"absolute",
    },
    button:{
        marginTop:"1rem",
        color:"#B15DDD",
        borderColor:"#B15DDD",
    }
}))


const Contacts = () => {
    const classes=useStyles()
  return (
    <Box component="div" style={{background:"#29093A", height:"100vh"}}>
        <Navbar />
        <Grid container justifyContent='center'>
          
            <Box component="form" className={classes.form}>
            <form action="https://send.pageclip.co/KRUQS5No9DJqo4Y1Vblb0D3Bpbs00iQr" className="pageclip-form" method="post">

  <input type="text" name="name" value="Roscoe Jones" />
  <input type="email" name="email" value="roscoe@example.com" />

  
  <button type="submit" className="pageclip-form__submit">
    <span>Send</span>
  </button>
</form>
              
              
            </Box>
           
        </Grid>
    </Box>
  )
}

export default Contacts