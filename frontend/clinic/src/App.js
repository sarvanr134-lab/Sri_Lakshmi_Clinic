import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Home from "./componend/Home";
import Navbar from "./componend/Navbar";
import HealingPrograms from "./componend/HealPrograms";
import OurStory from "./componend/OurStory";
import ExpertPractitioners from "./componend/ExpertPractitioners";
import PatientTestimonials from "./componend/PatientTestimonials";
import Contact from "./componend/Contact";
import Footer from "./componend/Footer";

function App() {
  const handleBookingClick = () => {
    const contactSection = document.getElementById("booking");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <BrowserRouter>
      <div className="App">

        <Navbar onBookingClick={handleBookingClick} />

        <Home />

        <HealingPrograms />

        <OurStory />

        <ExpertPractitioners />

        <PatientTestimonials />

        <Contact />

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;