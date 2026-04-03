import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, BrowserRouter, Route, Link, Router } from "react-router-dom";
import About from "./components/About/About";
import Contact  from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/user/:userId" element={ <User/>}/>
        <Route path="/github" element={ <Github/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
