import React from "react";
import "../styles/ExpertPractitioners.css";

const practitioners = [
  {
    image: "../assets/sample_doctor.png",
    qualification: "BEMS, ND, PhD",
    name: "Dr. Bathma Priya",
    role: "Chief Naturopathic Physician",
    specialization: "Clinical Naturopathy & Nutrition",
  },
];

function ExpertPractitioners() {
  return (
    <section className="experts-section">

      <div className="experts-container">

        {/* Heading */}
        <div className="experts-heading">

          <span className="experts-badge">
            Meet the Healers
          </span>

          <h2>Our Expert Practitioners</h2>

          <p>
            A dedicated team of certified naturopathic doctors, yoga masters,
            and Ayurvedic specialists
            <br />
            committed to your transformation
          </p>

        </div>

        {/* Cards */}
        <div className="experts-grid">

          {practitioners.map((person, index) => (
            <div className="expert-card" key={index}>

              {/* Image */}
              <div className="expert-image">

                <img
                  src={person.image}
                  alt={person.name}
                />

                <span className="qualification">
                  {person.qualification}
                </span>

              </div>

              {/* Content */}
              <div className="expert-content">

                <h3>{person.name}</h3>

                <span className="expert-role">
                  {person.role}
                </span>

                <p>
                  <strong>Specialization:</strong>{" "}
                  {person.specialization}
                </p>

                {/* Social icons */}
                <div className="expert-social">

                  <a href="https://www.email.com/" aria-label="Email">
                    ✉
                  </a>

                  <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                    in
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ExpertPractitioners;