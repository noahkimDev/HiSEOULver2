import "./signin2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { rememberMember } from "../store";
import { useNavigate } from "react-router-dom";

function Signin2(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector((state: any) => {
    return state.checkMember;
  });
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
      })
      .then((res) => {
        console.log("노반응?", res);
        console.log("서버로부터 응답 : ", res.data);
        // dispatch 사용안함
        // dispatch(rememberMember(res.data.member_info));
        if (res.data) {
          exitSignin();
          // navigate("/");
          setRemoveModal("");
          window.location.reload();
          // console.log("여기는", count);
          dispatch(rememberMember(loginInfo.memberId));
          console.log("다시", count);
        }
      })
      .catch((err: Error) => {
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
