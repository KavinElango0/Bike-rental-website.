import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="NavbarContainer">
      <div className="NavbarLeft">
        <span className="logo">BIKES</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/BikeList">BikeList</Link></li>
        <li><Link to="/BikeDetalis">BikeDetalis</Link></li>
        <li><Link to="/About">AboutUs</Link></li>
      </ul>
      <nav>
       <button className="ButtonA"><Link to="/Login">Login</Link></button>
       <button className="ButtonB"><Link to="/Register">Register</Link></button>
      </nav>
    </div>
  )
}
