import HomeLinks from "./HomeLinks";
import Image from "../../assets/images/home-image.svg";

function HomeHeader() {
  return (
    <>
      <div className="home-header">
        <div className="home-image">
          <img src={Image} alt="Home Image" />
        </div>

        <div className="home-content">
          <h1 className="home-title">Karl Almstedt</h1>
          <p className="home-description">Developer Student / Fullstack .NET</p>
          <HomeLinks />
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
