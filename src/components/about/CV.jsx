import { useState, useEffect } from "react";
import cvData from "../../data/cv.json";
import "./CV.css";

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
        <h2 className="cv-section-title">About Me</h2>
        <div className="cv-about-content">
          <p>
            I'm currently pursuing a comprehensive .NET development education at{" "}
            <a href="https://chasacademy.se/">Chas Academy</a>, where I'm
            learning expertise across the full software development stack. The
            program provides deep immersion in backend development including
            Databases and APIs, as well as frontend development with JavaScript
            with various frameworks and libraries such as React.
            <br />
            <br />
            Throughout the program, I work extensively with C# in combination
            with these technologies. This education positions me to excel either
            as a fullstack developer with a strong web focus and thorough
            understanding of the entire stack, or as a specialized backend
            developer working with APIs and microservices for enterprise
            systems. My training emphasizes practical, hands-on experience with
            modern development tools and methodologies used in today's software
            industry.
          </p>
        </div>
      </section>

      {/* {Skills} */}
      <section className="cv-section">
        <h2 className="cv-section-title">Technical Skills</h2>
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
        <h2 className="cv-section-title">Education</h2>
        {cv.education.map((education, index) => (
          <div key={index} className="cv-education-item">
            <h3 className="cv-education-title">{education.institution} - {education.area}</h3>
            <p className="cv-education-dates">
              {formatDate(education.startDate)} -{" "}
              {formatDate(education.endDate)}
            </p>
            <a
              href={education.link}
              target="_blank"
              rel="noreferrer"
              className="cv-education-link"
            >
              Read more here
            </a>
          </div>
        ))}
      </section>

      {/* {Personal Interests} */}
      <section className="cv-section">
        <h2 className="cv-section-title">Personal Interests</h2>
        {cv.interests.map((interest, index) => (
          <div key={index} className="cv-interest-item">
            <h3 className="cv-interest-title">{interest.name}</h3>
            <p className="cv-interest-keywords">{interest.keywords.join(", ")}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CV;
