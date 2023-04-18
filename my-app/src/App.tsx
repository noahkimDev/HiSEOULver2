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
import Signup2 from "./signup/signup2";
import Hospital from "./hospital/hospital";
import Home from "./home";
import Click_culture from "./clickCulture/clickCulture";

import Icon from "./icon/icon";
import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTruckMedical,
  faGuitar,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
function App() {
  // useParams 사용
  // usestate사용
  let [userCheck, setUserCheck] = useState("");
  axios
    .get("http://localhost:8081/auth/haveUserInfo", {
      withCredentials: true,
    }) //
    .then((info) => {
      console.log(info.data.user);
      if (info.data.user) {
        setUserCheck(info.data.user.member_id);
      } else {
        setUserCheck("");
      }
    });
  if (userCheck) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home userCheck={userCheck}></Home>} />
          <Route
            path="/exhibition/:id"
            element={<Click_culture></Click_culture>}
          ></Route>
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/exhibition/:id"
            element={<Click_culture></Click_culture>}
          />
        </Routes>
      </>
    );
  }
}

export default App;
