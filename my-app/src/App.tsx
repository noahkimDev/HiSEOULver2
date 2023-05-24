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
      }) //
      .then((info) => {
        if (info.data.user) {
          setUserCheck(info.data.user.member_id);
        } else {
          setUserCheck("");
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
