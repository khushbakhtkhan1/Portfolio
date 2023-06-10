import React from "react";
import {Route, Routes} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";
import Home from "./components/";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";


const App=()=>{
  return(
    <>
    <CssBaseline />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contacts />} />
    </Routes>
    
    </>
  )
}
export default App;

