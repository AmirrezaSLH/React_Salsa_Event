import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles.css";
import ClassesSection from "./Classes_Summary"; // Import the ClassesSection
import HeroSection from "./HeroSection_file";
import CalendarComponent from "./Calendar"; // Renamed import to avoid conflict

// Ensure styles.css file exists in the same directory

const Events = () => (
  <section className="section">
    <h1>Upcoming Events</h1>
    <p>Stay tuned for upcoming salsa events.</p>

    <HeroSection /> {/* Hero Section should appear only once here */}
  </section>
);

const CalendarPage = () => ( // Renamed to avoid conflict
  <section className="section">
    <h1>Event Calendar</h1>
    <p>Check out upcoming salsa events.</p>

    <CalendarComponent /> {/* Corrected reference to Calendar component */}
  </section>
);

const Classes = () => (
  <section className="section">
    <h1>Salsa Classes</h1>
    <p>Learn salsa with expert instructors.</p>

    <ClassesSection /> {/* Classes section below Hero section */}
  </section>
);

const Contact = () => (
  <section className="section">
    <h1>Contact Us</h1>
    <p>Get in touch for more information.</p>
  </section>
);

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/classes">Classes</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/calendar" className="calendar-button">Calendar</Link></li>
    </ul>
  </nav>
);

const Home: React.FC = () => (
  <>
    <HeroSection /> {/* Hero Section should appear only once here */}
    <ClassesSection /> {/* Classes section below Hero section */}
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<CalendarPage />} /> {/* Fixed Calendar Page Reference */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
