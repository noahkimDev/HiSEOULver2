/*eslint-disable*/

import React from "react";
import wow from "./img/6.png";
import yes from "./img/5.png";
import korea from "./img/korea.png";
import Navbar1 from "./navbar/navbar1";
import Signin from "./signin/signin";
import Festival1 from "./culture/culture";
import Culture2 from "./culture/culture2";
import SeoulPics from "./seoul-pics/seoul-pics";
import Navbar2 from "./navbar/navbar2";
import Signin2 from "./signin/signin2";
import Hospital from "./hospital/hospital";
import Icon from "./icon/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTruckMedical,
  faGuitar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <div>
        {/* <Navbar1></Navbar1> */}
        {/* <Signin></Signin> */}
        <Navbar2></Navbar2>
        {/* <Signin2></Signin2> */}
        {/* <div className="main-background">HiSEOUL</div> */}
        <SeoulPics></SeoulPics>
        <div style={{ clear: "both" }}></div>

        <Icon></Icon>
        <Culture2></Culture2>
        {/* <Festival1></Festival1> */}
        <Hospital></Hospital>
      </div>
    </>
  );
}

export default App;
