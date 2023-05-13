import React from "react";
import {Route, Routes} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import "./App.css";
import Home from "./components/";
import Resume from "./components/Resume";


const App=()=>{
  return(
    <>
    
    <CssBaseline />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    </Routes>
    
    </>
  )
}
export default App;

