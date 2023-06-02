import React from 'react';
import { makeStyles,withStyles } from "@material-ui/core/styles";
import {
TextField,
Typography,
Grid,
Button,
Box
}from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
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

const InputField=withStyles({
    root:{
        "& label.Mui-focused":{
            color:"#B15DDD",
        },
        "& label":{
            color:"#D5BCFA",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"#D5BCFA",
            },
            "&:hover fieldset":{
                borderColor:"#D5BCFA",
            },
            "&.Mui-focused fieldset":{
                borderColor:"D5BCFA"
            },
        }
    },
})(TextField);

const Contacts = () => {
    const classes=useStyles()
  return (
    <Box component="div" style={{background:"#29093A", height:"100vh"}}>
        <Navbar />
        <Grid container justifyContent='center'>
            <form action="https://send.pageclip.co/KRUQS5No9DJqo4Y1Vblb0D3Bpbs00iQr" className="pageclip-form" method="post">
            <Box component="form" className={classes.form}>
                
                <Typography variant="h5" style={{color:"#B15DDD",textAlign:"center",textTransform:"uppercase"}}>
                    Hire or Contact me...
                </Typography>
                <InputField fullWidth={true} label="Name" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white"}}} />
                <br />
                <InputField fullWidth={true} label="Email" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white"}}} />
                <br />
                <InputField fullWidth={true} label="Company name" variant="outlined" margin="dense" size="medium" inputProps={{style:{color:"white"}}} />
                <br />
                <Button type="submit"  className={classes.button } variant="outlined" fullWidth={true} endIcon={<SendIcon />} >
                    Contact Me
                </Button>
              
            </Box>
              </form>
        </Grid>
    </Box>
  )
}

export default Contacts