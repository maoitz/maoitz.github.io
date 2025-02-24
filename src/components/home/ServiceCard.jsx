import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faDatabase, faPaintBrush, faServer,} from "@fortawesome/free-solid-svg-icons";

// Map JSON icon names to imported FontAwesome icons
const iconMap = {
  "computer": faComputer,
  "paint-brush": faPaintBrush,
  "server": faServer,
  "database": faDatabase,
};

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="icon-container">
        <FontAwesomeIcon icon={iconMap[service.icon]} size="2x"/>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
