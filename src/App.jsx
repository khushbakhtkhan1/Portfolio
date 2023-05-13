import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";

const App=()=>{
  return(
    <>
    <CssBaseline />
    <Navbar />
    <Header />
    <Particles 
      params={{
        particles:{
          number:{
            value:45,
          }
        }
      }}
    />
    </>
  )
}
export default App;

