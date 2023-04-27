import "./signin2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import kakaoBtn from "../img/kakao.png";

import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { rememberMember } from "../store";
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
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
        alert("you wrote the wrong information !!");
      });
  }

  async function kakaoLogin() {
    await axios
      .get("http://localhost:8081/auth/kakao", {
        withCredentials: true,
      }) //
      .then((res) => {
        // if (res) {
        //   console.log("fsa", show);
        //   exitSignin();
        // }
        console.log(res);
      });
    // const JS_APP_KEY = "5cffda1ee389a071d0ffa2e8731eb1a0";
    // const REDIRECT_URI = "http://localhost:8081/auth/kakao/callback";
    // const makeFormData = (params: any) => {
    //   const searchParams = new URLSearchParams();
    //   Object.keys(params).forEach((key) => {
    //     searchParams.append(key, params[key]);
    //   });

    //   return searchParams;
    // };
    // return axios({
    //   method: "GET",
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //     // "Access-Control-Allow-Origin": "http://localhost:3001",
    //   },
    //   url: "http://localhost:3001/auth/kakao",
    //   data: makeFormData({
    //     grant_type: "authorization_code",
    //     client_id: JS_APP_KEY,
    //     redirect_uri: REDIRECT_URI,
    //     // code
    //   }),
    // });
  }

  return (
    <>
      {show && (
        <div className={props.name}>
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
                      navigate("/");
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
