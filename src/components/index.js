import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles({
    particlesCanva:{
        position:"absolute",
        opacity:"0.3"
    }
});

const Home=()=>{
    const classes=useStyles();

    return(
        <>
        <Navbar />
        <Header />
        <Particles
        canvasClassName={classes.particlesCanva}
        params={{
            particles:{
              number:{
                value:45
              }  
            }
        }}
        />
        </>
    )
}
export default Home;