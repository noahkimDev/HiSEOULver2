import "./culture.css";

import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Festival() {
  let wow = () => {
    console.log("wiow");
  };
  return (
    <div className="festival-frame">
      <div className="festival-name">
        <p>Performence</p>
      </div>
      <div className="container">
        <div className="festival-pictures">
          <div className="move-left">
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              size="3x"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="festival-container">
            <div className="pictures">
              <div className="inner-img">
                <img src={img6} alt="" />
              </div>

              <div className="inner-img">
                <img src={img4} alt="" />
              </div>
              <div className="inner-img">
                <img src={img5} alt="" />
              </div>
              <div className="inner-img">
                <img src={img5} alt="" />
              </div>

              <div className="inner-img">
                <img src={img5} alt="" />
              </div>

              <div className="inner-img">
                <img src={img5} alt="" />
              </div>

              <div className="inner-img">
                <img src={img5} alt="" />
              </div>
              <div className="inner-img">
                <img src={img5} alt="" />
              </div>
              <div className="inner-img">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div className="move-right">
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              size="3x"
              onClick={wow}
              style={{ cursor: "pointer" }}
            />
          </div>
          {/* 
          <div className="inner-img">
          <img src={img6} alt="" />
          </div>
          <div className="inner-img">
            <img src={img4} alt="" />
          </div>
          <div className="inner-img">
            <img src={img6} alt="" />
          </div>
          <div className="inner-img">
            <img src={img5} alt="" />
          </div>
          <div className="inner-img">
            <img src={img6} alt="" />
          </div>
          <div className="inner-img">
            <img src={img4} alt="" />
          </div> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Festival;
