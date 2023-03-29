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
  // usestate사용
  let [userCheck, setUserCheck] = useState("");
  axios
    .get("http://localhost:8081/auth/haveUserInfo", {
      withCredentials: true,
    }) //
    .then((info) => {
      console.log(info.data.user);
      if (info.data.user) {
        console.log("여기잖아");
        setUserCheck(info.data.user.member_id);
      } else {
        console.log("여기아니잖아");
        setUserCheck("");
      }
    });
  console.log("이제시작하자", userCheck);
  if (userCheck) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home userCheck={userCheck}></Home>} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Home></Home>
      </>
    );
  }
}

export default App;
