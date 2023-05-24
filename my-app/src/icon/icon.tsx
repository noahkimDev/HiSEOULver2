import "./icon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTruckMedical,
  faGuitar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function Icon() {
  return (
    <>
      <div className="information-container">
        <div className="information">
          <FontAwesomeIcon className="icon" icon={faHouse} />
          <p>Housing</p>
        </div>
        <div className="information">
          <FontAwesomeIcon className="icon" icon={faTruckMedical} />
          <p>Hospital</p>
        </div>
        <div className="information">
          <FontAwesomeIcon className="icon" icon={faGuitar} />
          <p>Culture</p>
        </div>
        <div className="information">
          <FontAwesomeIcon className="icon" icon={faUtensils} />
          <p>Food</p>
        </div>
      </div>
    </>
  );
}

export default Icon;
