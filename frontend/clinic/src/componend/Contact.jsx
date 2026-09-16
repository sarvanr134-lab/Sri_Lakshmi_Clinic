import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
 
  ChevronDown
} from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Thank you! Your inquiry has been submitted.");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      message: ""
    });
  };

  return (
    <div className="contact-page" id="contact">

      {/* ================= MAIN CONTENT ================= */}
      <main className="contact-container">

        {/* Page Heading */}
        <section className="contact-heading">

          <div className="heading-badge">
            Get in Touch
          </div>

          <h1>
            Begin Your Healing Journey
          </h1>

          <p>
            Have questions or ready to book a session? Our wellness team is
            here to guide you to the right program.
          </p>

        </section>


        {/* ================= CONTENT GRID ================= */}
        <section className="contact-grid">

          {/* ================= LEFT SIDE ================= */}
          <div className="contact-info">


            {/* Visit Us */}
            <div className="info-card">

              <div className="info-title">

                <div className="info-icon">
                  <MapPin size={17} />
                </div>

                <h3>Visit Us</h3>

              </div>

              <p>
                47 Wellness Grove Lane<br />
                Serene Valley, Bangalore<br />
                Karnataka 560001
              </p>

            </div>


            {/* Call Us */}
            <div className="info-card">

              <div className="info-title">

                <div className="info-icon">
                  <Phone size={17} />
                </div>

                <h3>Call Us</h3>

              </div>

              <p>
                Phone: (123) 456-7890<br />
                WhatsApp: (123) 456-7891
              </p>

            </div>


            {/* Email Us */}
            <div className="info-card">

              <div className="info-title">

                <div className="info-icon">
                  <Mail size={17} />
                </div>

                <h3>Email Us</h3>

              </div>

              <p>
                info@naturaeheal.com<br />
                appointments@naturaeheal.com
              </p>

            </div>


            {/* Hours */}
            <div className="info-card">

              <div className="info-title">

                <div className="info-icon">
                  <Clock size={17} />
                </div>

                <h3>Hours</h3>

              </div>

              <p>
                Mon – Sat: 7:00 AM – 7:00 PM<br />
                Sunday: 8:00 AM – 1:00 PM
              </p>

            </div>

          </div>


          {/* ================= RIGHT SIDE FORM ================= */}
          <div className="consultation-card">

            <h2>
              Book a Wellness Consultation
            </h2>

            <p className="form-description">
              Fill in your details and we will match you with the perfect
              program
            </p>


            <form onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>


              {/* Row 2 */}
              <div className="form-row">

                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />

                </div>


                <div className="form-group">

                  <label>
                    Program of Interest
                  </label>

                  <div className="select-wrapper">

                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select a program
                      </option>

                      <option value="physiotherapy">
                        Physiotherapy
                      </option>

                      <option value="wellness">
                        Wellness Program
                      </option>

                      <option value="pain-management">
                        Pain Management
                      </option>

                      <option value="rehabilitation">
                        Rehabilitation
                      </option>

                    </select>

                    <ChevronDown
                      size={17}
                      className="select-icon"
                    />

                  </div>

                </div>

              </div>


              {/* Message */}
              <div className="form-group message-group">

                <label>
                  Tell Us About Your Health Goals *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share what you are experiencing and what you hope to achieve..."
                  required
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="submit-btn"
              >
                Send My Inquiry
              </button>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Contact;