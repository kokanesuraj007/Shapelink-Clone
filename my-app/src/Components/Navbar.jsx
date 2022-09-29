import React from 'react'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/main.css";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (
 
    <header>
    <div>
      <img src="https://kcdn.twiikapp.com/images/logo.png" alt="logo" />
    </div>

    <nav ref={navRef}>
      <a href="/#">Get the app</a>
      <a href="/#">Contact</a>
      <a href="/#">Login</a>
      <a href="/#">Create account</a>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
  </header>





    
  )
}

export default Navbar