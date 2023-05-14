import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
Typography,
Avatar,
Grid,
Box
} from "@material-ui/core"
import Typed from "react-typed"

const useStyles=makeStyles(theme=>({
  avatar:{
    width:theme.spacing(20),
    height:theme.spacing(20),
    margin:theme.spacing(1)
  },
  title:{
    color:"#D5BCFA"
  },
  subtitle:{
    color:"#A639CD",
    marginBottom:"4rem"
  },
  typedcontainer:{
    zIndex:1,
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    width:"100vw",
    textAlign:"center"
  }
}));

const Header = () => {
  const classes=useStyles();
  return (
    <Box className={classes.typedcontainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src="./beachy.png" alt="Khushbakht Khan" />
        </Grid>
        <Typography className={classes.title} variant='h4'>
            <Typed strings={["Khushbakht Khan"]} typeSpeed={40} />
        </Typography>
        <Typography className={classes.subtitle} variant='h5'>
            <Typed strings={["Web Design", "Web Development","Data Science"]} typeSpeed={40} backSpeed={60} loop />
        </Typography>
    </Box>
  )
}

export default Header