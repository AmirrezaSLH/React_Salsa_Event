import React, { useState, useEffect } from "react";
import "./styles.css"; // Ensure styles are linked

const events = [
  {
    id: 1,
    date: "📅 April 20, 2025",
    title: "SALSA OUTDOOR EVENT",
    details: "💃 50+ Dancers | 🎵 Live DJ | 📍 Public Square, Waterloo",
    image: "/images/back3.jpg",
  },
  {
    id: 2,
    date: "📅 May 5, 2025",
    title: "BEGINNER SALSA WORKSHOP",
    details: "🕺 Learn Salsa Basics | 🎶 Latin Beats | 📍 Button Factory, Waterloo",
    image: "/images/back1.png",
  },
];

const HeroSection: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentEvent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/back_mother.jpg)`,
      }}
    >
      <div className="hero-container">
        {/* Left side content */}
        <div className="hero-text">
          <p className="event-date">{events[currentEvent].date}</p>
          <h1>
            {events[currentEvent].title.split(" ").map((word, index) =>
              index === 1 ? (
                <span key={index} className="highlight">
                  {word}{" "}
                </span>
              ) : (
                `${word} `
              )
            )}
          </h1>
          <p className="event-details">{events[currentEvent].details}</p>
          <div className="hero-buttons">
            <button className="primary-btn">Book Now</button>
            <button className="secondary-btn">View Details</button>
          </div>
        </div>

        {/* Right side image */}
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}${events[currentEvent].image}`} alt="Event" />
        </div>
      </div>

      {/* Slideshow Navigation Buttons */}
      <button className="nav-button prev" onClick={handlePrev}>❮</button>
      <button className="nav-button next" onClick={handleNext}>❯</button>
    </section>
  );
};

export default HeroSection;
