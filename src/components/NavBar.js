/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [toggel, setToggel] = useState(false);
  return (
    <div style={{ backgroundColor: "black", height: "10vh" }}>
      <GiHamburgerMenu
        style={{ color: "white", margin:"1.5%" ,zIndex:"1", transition:"all 2s linear" , transitionDelay:"1s"}}
        onClick={(e) => {
          e.preventDefault();
          setToggel(!toggel);
        }}
      />
      { toggel && <div style={{height:"90vh",width:"30vh",background:"black",position:"absolute",top:"95px"}}>
      <ul style={{ height: "100%", display: "flex", flexDirection:"column"}}>
        
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/search">
            <li>Search</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
      </ul>
        </div>}
    </div>
  );
}

export default NavBar;
