import "./signin2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { rememberMember } from "../store";
// import {redirct}
import { useNavigate, Link } from "react-router-dom";

// import { Link } from "react-router-dom";
function Signin2(props: any) {
  // function useSelectorFunc() {
  //   return useSelector((state: any) => {
  //     return state.checkMember.member;
  //   });
  // }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [removeModal, setRemoveModal] = useState("");
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [memberInfo, setMemberInfo] = useState("");
  let [memberInfo2, setMemberInfo2] = useState("");
  let [show, setShow] = useState(true);

  const exitSignin = () => setShow(false);
  async function checkMember() {
    let loginInfo = { memberId: id, memberPw: pw };

    await axios
      .post("http://localhost:8081/auth/signin", loginInfo, {
        withCredentials: true,
      }) //
      .then((res) => {
        // dispatch 사용안함
        // dispatch(rememberMember(res.data.member_info));
        console.log("서버로부터 응답 : ", res.data);
        if (res.data) {
          exitSignin();
          // navigate("/");
          setRemoveModal("");
          window.location.reload();

          dispatch(rememberMember("rmrm"));
        }
      })
      .catch((err) => {
        console.error(err);
        alert("you wrote the wrong information !!");
      });
  }

  return (
    <>
      {show && (
        <div className={removeModal === "" ? props.name : removeModal}>
          <div className="container">
            <div className="signin-frame">
              <h1 style={{ textAlign: "center" }}>Sign-in</h1>
              <Form>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your id</Form.Label>
                  <Form.Control
                    placeholder="Enter your id"
                    onChange={function (e) {
                      setId(e.target.value);
                      setMemberInfo(e.target.value);
                    }}
                    value={memberInfo}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={function (e) {
                      setPw(e.target.value);
                      setMemberInfo2(e.target.value);
                    }}
                    value={memberInfo2}
                  />
                </Form.Group>
                <div className="signin-button d-grid gap-3">
                  <a href="http://localhost:8081/auth/kakao">
                    <Button
                      className="kakaoSignin"
                      // href="http://localhost:8081/auth/kakao"
                      variant="warning"
                      // type="submit"
                      size="lg"
                      // onClick={() => {
                      // kakaoLogin();
                      //   // navigate("/");
                      //   // window.location.reload();
                      // }}
                    >
                      Kakao
                    </Button>
                  </a>

                  <Button
                    variant="info"
                    type="submit"
                    size="lg"
                    onClick={function (e) {
                      e.preventDefault();
                      checkMember();
                    }}
                  >
                    Sign in
                  </Button>
                  {"             "}
                  <Button
                    variant="outline-success"
                    type="submit"
                    size="lg"
                    onClick={() => {
                      // navigate("/");
                      setRemoveModal("black-bg show-bg");
                    }}
                  >
                    Close
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signin2;
