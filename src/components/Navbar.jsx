
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        {/* <span className="logo-icon">📸</span> */}
        <span>GOAT Photography</span>
      </Link>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>Services</Link>
        </li>

        <li>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>

      </ul>

      {/* Book Now Button */}
      <Link to="/contact" className="nav-book-btn">
        Book Now
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;
