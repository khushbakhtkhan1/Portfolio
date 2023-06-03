import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
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
    formField: {
        width: '100%',
        marginBottom: theme.spacing(2),
        '& .MuiInputLabel-root': {
            color: '#D5BCFA',
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#D5BCFA',
            },
            '&:hover fieldset': {
              borderColor: '#D5BCFA',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D5BCFA',
            },
            '& input': {
                color: 'white',
              },
          },
         
        },
        
        heading: {
            textAlign: 'center',
            color: '#B15DDD',
            marginBottom: theme.spacing(2),
            fontWeight: 300,
            fontSize: '27px',
          },
 
}));


const Contacts = () => {
    const classes=useStyles()
  return (
    <Box component="div" style={{background:"#29093A", height:"100vh"}}>
        <Navbar />
        <Grid container justifyContent='center'>
          
            <Box component="form" className={classes.form}>
            <form action="https://send.pageclip.co/KRUQS5No9DJqo4Y1Vblb0D3Bpbs00iQr" className="pageclip-form" method="post">
            <h2 className={classes.heading}>HIRE OR CONTACT ME</h2>

            <TextField
        className={classes.formField}
        label="Name"
        variant="outlined"
      />

      <TextField
        className={classes.formField}
        label="Email"
        variant="outlined"
        type="email"
      />
    
  <button 
  type="submit" 
  className="pageclip-form__submit" 
  style={{ backgroundColor: 'transparent',
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