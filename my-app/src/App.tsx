/*eslint-disable*/

import { useEffect } from "react";
import Navbar2 from "./navbar/navbar2";
import Home from "./home";
import Click_culture from "./clickCulture/clickCulture";
import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
function App() {
  // useParams 사용
  // usestate사용
  let [signinModal, setSigninModal] = useState("black-bg show-bg");
  let [userCheck, setUserCheck] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/auth/haveUserInfo", {
        withCredentials: true,
      }) // 왜 info에 아무 데이터도 오지않을까?
      .then(async (info) => {
        console.log(info, "가즈아ss");
        if (info.data.user) {
          console.log("스물스물");
          await setUserCheck(info.data.user.member_id);
        } else {
          await setUserCheck("");
        }
      });
  }, []);

  if (userCheck) {
    return (
      <>
        <Navbar2 user={userCheck}></Navbar2>

        <Routes>
          <Route path="/" element={<Home userCheck={userCheck}></Home>} />
          <Route
            path="/exhibition/:id"
            element={<Click_culture userCheck={userCheck}></Click_culture>}
          ></Route>
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Navbar2 user={userCheck}></Navbar2>

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
