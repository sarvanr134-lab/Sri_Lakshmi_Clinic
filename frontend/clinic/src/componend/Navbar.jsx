import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">♧</span>

          <span>
            Sri Lakshmi Clinic
          </span>
        </a>


        {/* Navigation */}
        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#experts">
            Our Experts
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Right side */}
        <div className="nav-right">

          <a
            href="tel:+919600661095"
            className="phone"
          >
            ☎
            <span>
              +91 96006 61095
            </span>
          </a>

          <a
            href="#booking"
            className="booking-btn"
          >
            Book a Session
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;