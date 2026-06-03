import React, { useState } from "react";
import "../styles/CertificationsList.css";
<st></st>

function CertificationsList() {
  const [showCertifications, setShowCertifications] = useState(true);

  const certifications = [
    {
      id: 1,
      title: "React Developer",
      provider: "Meta",
    },
    {
      id: 2,
      title: "JavaScript Algorithms",
      provider: "freeCodeCamp",
    },
    {
      id: 3,
      title: "Python Programming",
      provider: "Coursera",
    },
    {
      id: 4,
      title: "Node.js Fundamentals",
      provider: "Udemy",
    },
    {
      id: 5,
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
    },
  ];

  return (
    <div className="certifications-card">
      <h2>Developer Certifications</h2>

      <button
        className="toggle-btn"
        onClick={() =>
          setShowCertifications(!showCertifications)
        }
      >
        {showCertifications
          ? "Hide Certifications"
          : "Show Certifications"}
      </button>

      {showCertifications && (
        <ul className="certifications-list">
          {certifications.map((certification) => (
            <li key={certification.id}>
              {certification.title} - {certification.provider}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CertificationsList;