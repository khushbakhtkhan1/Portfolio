import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import {


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
    <h2 style={{
  textAlign:"center",
  color: '#B15DDD', 
  borderRadius: '5px',
  borderColor: '#D5BCFA',
  width:'100%',
  fontSize:'30px' }}>HIRE OR CONTACT ME</h2>
  <input type="text" name="name" placeholder="Name" style={{ backgroundColor: 'transparent',
  color: 'white', 
  padding:"10px 20px",
  borderRadius: '5px',
  borderColor: '#D5BCFA',
  width:'100%',
  fontSize:'16px',
  marginBottom:"10px" }}/>
  <input type="email" name="email" placeholder="Email" style={{ backgroundColor: 'transparent',
  color: 'white', 
  padding:"10px 20px",
  borderRadius: '5px',
  borderColor: '#D5BCFA',
  width:'100%',
  fontSize:'16px',
  marginBottom:"10px" }}/>

  <textarea name="message" id="mg" cols="30" rows="10" placeholder='message' style={{ backgroundColor: 'transparent',
  color: '#B15DDD', 
  padding:"10px 20px",
  borderRadius: '5px',
  borderColor: '#D5BCFA',
  width:'100%',
  fontSize:'16px',
  marginBottom:"20px" }}></textarea>
  <button type="submit" className="pageclip-form__submit" style={{ backgroundColor: 'transparent',
  color: '#B15DDD', 
  padding:"10px 20px",
  borderRadius: '5px',
  borderColor: '#D5BCFA',
  width:'100%',
  fontSize:'18px' }}>
    <span>Send</span>
  </button>
</form>
              
              
            </Box>
           
        </Grid>
    </Box>
  )
}

export default Contacts