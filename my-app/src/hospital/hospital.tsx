import "./hospital.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import React, { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import Wow from "./mapContainer";

function Hospital() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  let [style1, setStyle1]: any = useState({ display: "block" });
  let [style2, setStyle2]: any = useState({ display: "none" });
  const radios = [
    {
      name: "Search hospital with the area name where you are (ex) 서울역 병원",
      value: "1",
    },
    { name: "keyword-explanation", value: "2" },
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
                onChange={function (e) {
                  if (radioValue === "1") {
                    setRadioValue(e.currentTarget.value);
                    setStyle1({ display: "none" });
                    setStyle2({ display: "block" });
                  } else if (radioValue === "2") {
                    setRadioValue(e.currentTarget.value);
                    setStyle1({ display: "block" });
                    setStyle2({ display: "none" });
                  }
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
            {/* </ButtonGroup> */}
          </div>
          <div className="explain">
            <div className="hospital-explanation" style={style1}>
              {/* gf */}
              <Wow></Wow>
            </div>
            <div className="keyword-explanation" style={style2}>
              ff
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hospital;
