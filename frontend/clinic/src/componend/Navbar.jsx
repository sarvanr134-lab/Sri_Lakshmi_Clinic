import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ onBookingClick }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">♧</span>
          <span>Sri Lakshmi Clinic</span>
        </a>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#experts">Our Experts</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right Side */}
        <div className="nav-right">

          {/* Theme Button */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Phone */}
          <a
            href="tel:+919361102449"
            className="phone"
          >
            <span className="phone-icon">☎</span>
            <span>+91 93611 02449</span>
          </a>

          {/* Booking */}
          <button
            type="button"
            className="booking-btn"
            onClick={onBookingClick}
          >
            Book a Session
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;