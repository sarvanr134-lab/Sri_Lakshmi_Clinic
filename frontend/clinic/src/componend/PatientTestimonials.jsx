import React, { useEffect, useState } from "react";
import "../styles/PatientTestimonials.css";

const defaultReviews = [
  {
    id: 1,
    name: "Meera Krishnan",
    role: "Software Engineer",
    rating: 5,
    review:
      "After years of chronic migraines and anxiety, NaturaHeal's naturopathy program changed my life completely. The herbal protocols and weekly yoga sessions brought me a clarity and calmness I had forgotten was possible.",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Business Owner",
    rating: 5,
    review:
      "The Ayurveda Panchakarma retreat was transformative. I came in stressed and depleted; I left feeling 20 years younger. Guru Arjun's pranayama sessions alone are worth the visit.",
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Retired Educator",
    rating: 5,
    review:
      "Dr. Priya's nutritional naturopathy plan helped me reverse my pre-diabetes without medication. The team's compassion and holistic approach made all the difference. I tell everyone I know about this place.",
  },
];

function PatientTestimonials() {
  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews = localStorage.getItem("naturaheal_reviews");

      return savedReviews
        ? JSON.parse(savedReviews)
        : defaultReviews;
    } catch (error) {
      return defaultReviews;
    }
  });

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    review: "",
  });

  // Save reviews whenever reviews change
  useEffect(() => {
    localStorage.setItem(
      "naturaheal_reviews",
      JSON.stringify(reviews)
    );
  }, [reviews]);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Submit review
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const role = formData.role.trim();
    const review = formData.review.trim();

    if (!name || !role || !review) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: name,
      role: role,
      rating: Number(formData.rating),
      review: review,
    };

    setReviews((previousReviews) => [
      ...previousReviews,
      newReview,
    ]);

    setFormData({
      name: "",
      role: "",
      rating: 5,
      review: "",
    });

    setShowForm(false);
  };

  // Reset reviews to default
  const resetReviews = () => {
    const confirmReset = window.confirm(
      "Do you want to reset all reviews to the default reviews?"
    );

    if (confirmReset) {
      setReviews(defaultReviews);
    }
  };

  // Render stars
  const renderStars = (rating) => {
    return (
      <>
        {"★".repeat(rating)}

        <span className="empty-stars">
          {"★".repeat(5 - rating)}
        </span>
      </>
    );
  };

  // Review card
  const ReviewCard = ({ testimonial }) => {
    return (
      <div className="testimonial-card">

        {/* Top section */}
        <div className="testimonial-top">

          <div className="stars">
            {renderStars(testimonial.rating)}
          </div>

          <div className="quote">
            ”
          </div>

        </div>

        {/* Review */}
        <p className="testimonial-review">
          "{testimonial.review}"
        </p>

        {/* Divider */}
        <div className="testimonial-divider"></div>

        {/* Patient information */}
        <div className="patient-info">

          <div className="patient-avatar">
            {testimonial.name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div className="patient-details">

            <h4>
              {testimonial.name}
            </h4>

            <span>
              {testimonial.role}
            </span>

          </div>

        </div>

      </div>
    );
  };

  return (
    <section className="testimonials-section">

      <div className="testimonials-container">

        {/* =================================
            SECTION HEADING
        ================================= */}

        <div className="testimonials-heading">

          <span className="testimonials-badge">
            Healing Stories
          </span>

          <h2>
            What Our Patients Say
          </h2>

          <p>
            Real transformations from people who chose
            the natural path to health and vitality
          </p>

        </div>


        {/* =================================
            WRITE REVIEW BUTTON
        ================================= */}

        <div className="review-button-container">

          <button
            type="button"
            className="add-review-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm
              ? "Close Review Form"
              : "Write a Review"}
          </button>

        </div>


        {/* =================================
            REVIEW FORM
        ================================= */}

        {showForm && (
          <form
            className="review-form"
            onSubmit={handleSubmit}
          >

            <h3>
              Share Your Healing Experience
            </h3>

            {/* Name + Role */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>


              <div className="form-group">

                <label htmlFor="role">
                  Profession / Role
                </label>

                <input
                  id="role"
                  type="text"
                  name="role"
                  placeholder="Example: Software Engineer"
                  value={formData.role}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* Rating */}
            <div className="form-group">

              <label htmlFor="rating">
                Rating
              </label>

              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              >

                <option value="5">
                  ★★★★★ - Excellent
                </option>

                <option value="4">
                  ★★★★☆ - Very Good
                </option>

                <option value="3">
                  ★★★☆☆ - Good
                </option>

                <option value="2">
                  ★★☆☆☆ - Fair
                </option>

                <option value="1">
                  ★☆☆☆☆ - Poor
                </option>

              </select>

            </div>


            {/* Review */}
            <div className="form-group">

              <label htmlFor="review">
                Your Review
              </label>

              <textarea
                id="review"
                name="review"
                rows="5"
                placeholder="Tell us about your experience..."
                value={formData.review}
                onChange={handleChange}
              />

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="submit-review-btn"
            >
              Submit Review
            </button>

          </form>
        )}


        {/* =================================
            INFINITE TESTIMONIAL SLIDER
        ================================= */}

        <div className="testimonial-slider">

          <div className="testimonial-track">

            {/* FIRST SET */}
            <div className="testimonial-group">

              {reviews.map((testimonial) => (
                <ReviewCard
                  key={`first-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}

            </div>


            {/* DUPLICATE SET
                Used for infinite scrolling */}
            <div
              className="testimonial-group"
              aria-hidden="true"
            >

              {reviews.map((testimonial) => (
                <ReviewCard
                  key={`second-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}

            </div>

          </div>

        </div>


        {/* =================================
            OPTIONAL RESET
        ================================= */}

        <button
          type="button"
          className="reset-reviews-btn"
          onClick={resetReviews}
        >
          Reset Default Reviews
        </button>

      </div>

    </section>
  );
}

export default PatientTestimonials;