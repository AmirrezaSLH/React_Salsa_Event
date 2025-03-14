import React from "react";
import "./Classes.css"; // Import CSS file

const classesData = [
  {
    id: 1,
    instructor: "Amirreza",
    role: "",
    image: "/images/instructor1.jpg",
    danceName: "Salsa Basics",
    level: "Beginner",
    days: "Mondays & Wednesdays",
    startDate: "April 10, 2025",
    endDate: "June 15, 2025",
    price: "$120",
    location: "Underdog Dance Studio"
  },
  {
    id: 2,
    instructor: "Silvio Salsero",
    role: "",
    image: "/images/instructor2.jpeg",
    danceName: "Bachata Flow",
    level: "Intermediate",
    days: "Tuesdays & Thursdays",
    startDate: "May 5, 2025",
    endDate: "July 10, 2025",
    price: "$140",
    location: "Student Life Center"
  }
];

const ClassesSection = () => {
  return (
    <section id="classes">
      <div className="classes-container">
        {classesData.map((cls) => (
          <div key={cls.id} className="class-card">
            <div className="instructor-section">
              <img src={cls.image} alt={cls.instructor} />
              <h3>{cls.instructor}</h3>
              <p>{cls.role}</p>
            </div>
            <div className="class-details">
              <h3>{cls.danceName} - {cls.level}</h3>
              <p>📅 {cls.days}</p>
              <p>🗓 Start: {cls.startDate} - End: {cls.endDate}</p>
              <p>📍 {cls.location}</p>
              <p className="class-price">💲 {cls.price}</p>
              <button className="register-button">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassesSection;
