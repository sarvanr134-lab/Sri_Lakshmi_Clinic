import React from "react";
import "../styles/OurStory.css";

const features = [
  "Certified naturopathic physicians & yoga masters",
  "Personalized holistic treatment plans",
  "100% natural, chemical-free therapies",
  "Serene healing environment & nature trails",
  "Flexible daily & residential programs",
  "Integrative approach — ancient + modern science",
];

const stats = [
  {
    number: "18+",
    label: "Years of Healing",
  },
  {
    number: "12,000+",
    label: "Patients Healed",
  },
  {
    number: "30+",
    label: "Expert Practitioners",
  },
  {
    number: "96%",
    label: "Patient Satisfaction",
  },
];

function OurStory() {
  return (
    <section className="our-story" id="about">
      <div className="story-container">

        {/* Left Content */}
        <div className="story-content">

          <span className="story-badge">
            Our Story
          </span>

          <h2>
            Why Choose NaturaHeal Wellness
            <br />
            Hospital?
          </h2>

          <p>
            Founded in 2008, NaturaHeal Wellness Hospital has been a sanctuary
            for those seeking genuine, drug-free healing. We blend classical
            naturopathy, authentic Ayurveda, and evidence-based yoga therapy to
            address the root cause of illness — not just the symptoms.
          </p>

          <p>
            Our multidisciplinary team of naturopathic doctors, yoga masters,
            Ayurvedic practitioners, and nutritionists work together to create
            deeply personalized programs that restore harmony to every
            dimension of your health.
          </p>

          {/* Features */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <span className="check-icon">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Content */}
        <div className="story-right">

          {/* Image */}
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80"
              alt="Yoga therapy"
            />
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default OurStory;