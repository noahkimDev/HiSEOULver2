import "./hospital.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";

function Hospital() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Hospital", value: "1" },
    { name: "Animal Hospital", value: "2" },
  ];
  return (
    <>
      <div className="hospital-container">
        <div className="hospital-upper-frame">
          <Alert className="hospital" variant="info">
            <p>Hospital</p>
          </Alert>
        </div>
        <div className="hospital-lower-frame">
          <div>
            {/* <ButtonGroup aria-label="Basic example">
              <Button variant="outline-secondary" className="btn">
                Hospital
              </Button>
              <Button variant="secondary" className="btn">
                Animal Hospital
              </Button>
            </ButtonGroup>
            <ButtonGroup> */}
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-secondary" : "outline-secondary"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
            {/* </ButtonGroup> */}
          </div>
          <div className="explain">
            <div className="hospital-explanation"></div>
            <div className="animal-hospital-explanation"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hospital;
