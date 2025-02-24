import Image from "../../assets/images/cv-image.svg";

function AboutHeader() {
  return (
    <div className="about-me-header">
      <div className="about-me-image">
        <img src={Image} alt="CV Image" />
      </div>
      <h1>Karl Almstedt</h1>
      <p>Fullstack .NET Student & Aspiring Game Developer</p>
    </div>
  );
}

export default AboutHeader;
