import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import ChatBot from "./ChatBot";
import Contact from "../sections/Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Home;