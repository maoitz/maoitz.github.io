import { useEffect } from "react";
import Header from "../components/about/AboutHeader";
import CV from "../components/about/CV";
import "./AboutMe.css";
import '../utils/CVPrint.css';

function AboutMe() {
  useEffect(() => {
    document.title = "CV | Karl Almstedt";
  }, []);

  return (
    <div className="about-me-page">
      <Header />
      <CV />
    </div>
  );
}

export default AboutMe;
