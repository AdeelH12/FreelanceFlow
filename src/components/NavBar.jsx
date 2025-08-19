import React from "react";
import './NavBar.css';
import { useState } from "react";

function NavBar() {

    const [open, setOpen] = useState(false);

    return (
       <nav className="navbar">
      <div className="navbar-left">
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Add Project</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;