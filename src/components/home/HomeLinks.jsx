import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HomeLinks() {
  return (
    <div className="home-links">
      <a href="https://github.com/maoitz" className="home-link">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/karl-almstedt-0a8a7a263/" className="home-link">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default HomeLinks;
