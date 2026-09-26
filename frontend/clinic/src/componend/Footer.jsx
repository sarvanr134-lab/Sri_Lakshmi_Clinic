import React from "react";
import { Leaf } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-column brand-column">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              <Leaf size={13} />
            </div>

            <span>NaturaHeal</span>
          </div>

          <p className="footer-description">
            A sanctuary of natural healing — combining
            the wisdom of Ayurveda, the science of
            naturopathy, and the grace of yoga to
            restore your complete wellbeing.
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Our Programs</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#experts">Our Experts</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>


        {/* ================= THERAPIES ================= */}
        <div className="footer-column">

          <h3>Our Therapies</h3>

          <ul>
            <li><a href="https://theyogatherapyinstitute.org/blogs/yoga-therapy-blog/what-is-yoga-therapy?srsltid=AU7gw4VVmm5M5J3b_ymwdegP02AtgcD32ASFGj1qww1ziNQXeJ1tLj47">Yoga Therapy</a></li>
            <li>
              <a href="https://my.clevelandclinic.org/health/articles/naturopathy">
                Naturopathy & Herbal Medicine
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Ayurveda">
                Ayurveda Panchakarma
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Meditation">
                Meditation & Pranayama
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Nutrition">
                Nutrition Counselling
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Wellness_retreat">
                Wellness Retreats
              </a>
            </li>
          </ul>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-column contact-column">

          <h3>Contact Info</h3>

          <p>
            Sardar Street, Dr. Rajendra Prasad Road, <br/>
               near Anna Park / Venkateswara Hotel<br/>
               
          </p>

          <p>
            Udumalaipettai, Tamil Nadu 642126.
          </p>

          <p>
            Phone: (123) 456-7890
          </p>

          <p>
            Email: info@naturaeheal.com
          </p>


          {/* Social Icons */}
          <div className="social-icons">

  <a href="https://www.facebook.com/" aria-label="Facebook">
    <FaFacebookF />
  </a>

  <a href="https://twitter.com/" aria-label="Twitter">
    <FaTwitter />
  </a>

  <a href="https://www.instagram.com/" aria-label="Instagram">
    <FaInstagram />
  </a>

  <a href="https://www.youtube.com/" aria-label="YouTube">
    <FaYoutube />
  </a>

</div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 NaturaHeal Wellness Hospital.
            All rights reserved.
          </p>

          <p>
            Heal naturally. Live vibrantly.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;