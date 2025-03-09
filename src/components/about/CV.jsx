import { useState, useEffect } from "react";
import cvData from "../../data/cv.json";
import "./CV.css";
import { div, p } from "framer-motion/client";

const CV = () => {
  // State to store the CV data
  const [cv, setCv] = useState(null);

  // Load the data on component mount
  useEffect(() => {
    setCv(cvData);
  }, []);

  // Show loading state while data is being loaded
  if (!cv) {
    return <div className="cv-loading">Loading...</div>;
  }

  // Format date (adjust based on preferred format)
  const formatDate = (dateString) => {
    if (dateString === "Present") return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="cv-container">
      <section className="cv-section">
        <h2 className="cv-section-title">{cv.titles.about}</h2>
        <div className="cv-about-content">
          {cv.about && cv.about.length > 0 ? (
            cv.about.map((paragraph, index) => (
              <p key={index}>
                {paragraph.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  /^https?:\/\//.test(part) ? (
                    <a
                      key={i}
                      href={part}
                      target="_blank"
                      rel="noreferrer"
                      className="cv-about-link"
                    >
                      Chas Academy
                    </a>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </section>

      {/* {Skills} */}
      <section className="cv-section">
        <h2 className="cv-section-title">{cv.titles.skills}</h2>
        <div className="cv-skills-grid">
          {cv.skills.map((skill, index) => (
            <div key={index} className="cv-skill-item">
              <h3 className="cv-skill-name">{skill.name}</h3>
              <ul className="cv-skill-keywords">
                {skill.keywords.map((keyword, idx) => (
                  <li key={idx} className="cv-skill-keyword">
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* {Education} */}
      <section className="cv-section">
        <h2 className="cv-section-title">{cv.titles.education}</h2>
        {cv.education.map((education, index) => (
          <div key={index} className="cv-education-item">
            <h3 className="cv-education-title">
              {education.institution} - {education.area}
            </h3>
            <p className="cv-education-dates">
              {formatDate(education.startDate)} -{" "}
              {formatDate(education.endDate)}
            </p>
            {education.link ? (
              <a
                href={education.link}
                target="_blank"
                rel="noreferrer"
                className="cv-education-link"
              >
                Read more here
              </a>
            ) : (
              <p className="cv-education-link">No link available</p>
            )}
          </div>
        ))}
      </section>

      {/* {Personal Interests} */}
      <section className="cv-section">
        <h2 className="cv-section-title">{cv.titles.interests}</h2>
        {cv.interests.map((interest, index) => (
          <div key={index} className="cv-interest-item">
            <h3 className="cv-interest-title">{interest.name}</h3>
            <p className="cv-interest-keywords">
              {interest.keywords.join(", ")}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CV;
