/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import menu from "../../Icons/new.png";
import cancel from "../../Icons/x-button.png";
import { navbarItems  } from "./navbarData";


function NavBar() {
  const [toggel, setToggel] = useState(true);
  return (
    <div style={{ backgroundColor: "black", height: "10vh" }}>
      <img
        src={menu}
        width="50px"
        height="40px"
        onClick={(e) => {
          e.preventDefault();
          setToggel(!toggel);
        }}
        style={{ marginLeft: "10px", marginTop: "20px" }}
      />

      <div className={toggel ? "navbar" : "navbarVisible"}>
        <img
          src={cancel}
          width="30px"
          height="20px"
          onClick={(e) => {
            e.preventDefault();
            setToggel(!toggel);
          }}
          style={{ marginLeft: "15px", marginTop: "30px" }}
        />
        <ul
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            top: "85px",
            position: "absolute",
          }}
        >{
          navbarItems.map((item)=>{
            return (
              <Link className="a" to={item.path}>
                <li
                  style={{ display: "flex" }}
                  onClick={() => {
                    setToggel(!toggel);
                  }}
                >
                  <div>
                    <img
                      src={item.img}
                      width="30px"
                      height="30px"
                      style={{ marginLeft: "15px", marginTop: "30px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "15px", marginTop: "37px" }}>
                    {item.title}
                  </div>
                </li>
              </Link>
            );
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
