import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">♧</span>
          <span>Sri Lakshmi Clinic</span>
        </Link>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/experts">Our Experts</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <a href="tel:+919600661095" className="phone">
            ☎ <span>+91 96006 61095</span>
          </a>

          <Link to="/booking" className="booking-btn">
            Book a Session
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;