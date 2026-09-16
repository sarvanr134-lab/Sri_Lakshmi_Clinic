import './App.css';
import Home from './componend/Home';
import Navbar from "./componend/Navbar";
import { BrowserRouter } from "react-router-dom";
import HealingPrograms from './componend/HealPrograms';
import OurStory from './componend/OurStory';
import ExpertPractitioners from './componend/ExpertPractitioners';
import PatientTestimonials from './componend/PatientTestimonials';
import Contact from './componend/Contact';
import Footer from './componend/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
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