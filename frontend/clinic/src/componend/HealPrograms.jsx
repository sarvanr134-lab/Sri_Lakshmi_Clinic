import React, { useRef } from "react";
import "../styles/HealPrograms.css";

const programs = [
  {
    title: "Yoga Therapy",
    icon: "♨",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    description:
      "Therapeutic yoga programs tailored to your body and goals — from restorative yin sessions to dynamic vinyasa flows for strength and flexibility.",
  },
  {
    title: "Naturopathy & Herbal Medicine",
    icon: "◒",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    description:
      "Evidence-based naturopathic consultations combining plant medicine, nutritional therapy, and lifestyle guidance to restore your body's innate healing ability.",
  },
  {
    title: "Ayurveda Treatments",
    icon: "♨",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    description:
      "Authentic Ayurvedic therapies including Abhyanga oil massage, Shirodhara, and Panchakarma detox — harmonizing mind, body, and spirit.",
  },
  {
    title: "Meditation & Mindfulness",
    icon: "☀",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    description:
      "Guided meditation, pranayama breathing work, and mindfulness practices to reduce stress, improve focus, and nurture deep mental clarity.",
  },
  {
    title: "Physiotherapy",
    icon: "✚",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    description:
      "Personalized physiotherapy programs designed to improve movement, reduce pain, and help you return to everyday activities.",
  },
  {
    title: "Massage Therapy",
    icon: "✦",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    description:
      "Relaxing therapeutic massage treatments that support circulation, reduce muscle tension, and promote complete relaxation.",
  },
];

function HealingPrograms() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="healing-section">
      <div className="healing-container">

        {/* Heading */}
        <div className="healing-heading">
          <span className="section-badge">
            What We Offer
          </span>

          <h2>
            Our Healing Programs
          </h2>

          <p>
            A comprehensive suite of natural therapies designed to treat the
            root cause of illness and nurture your complete wellbeing
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">

          <button
            type="button"
            className="carousel-btn carousel-prev"
            onClick={scrollLeft}
            aria-label="Previous program"
          >
            &#10094;
          </button>

          <div
            className="programs-carousel"
            ref={carouselRef}
          >
            {programs.map((program, index) => (
              <div
                className="program-card"
                key={index}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="program-image"
                />

                <div className="program-content">

                  <div className="program-icon">
                    {program.icon}
                  </div>

                  <h3>
                    {program.title}
                  </h3>

                  <p>
                    {program.description}
                  </p>

                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="carousel-btn carousel-next"
            onClick={scrollRight}
            aria-label="Next program"
          >
            &#10095;
          </button>

        </div>

        <div className="carousel-line"></div>

      </div>
    </section>
  );
}

export default HealingPrograms;