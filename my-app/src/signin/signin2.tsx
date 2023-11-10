import "./signin2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rememberMember } from "../store";

function Signin2(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [removeModal, setRemoveModal] = useState("");
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [memberInfo, setMemberInfo] = useState("");
  let [memberInfo2, setMemberInfo2] = useState("");
  let [show, setShow] = useState(true);

  const exitSignin = () => setShow(false);
  async function checkMember() {
    let loginInfo = { memberId: id, memberPw: pw };
    // console.log(loginInfo);
    await axios
      .post("http://localhost:8081/auth/signin", loginInfo, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          exitSignin();
          // // navigate("/");
          setRemoveModal("");
          window.location.reload();
          dispatch(rememberMember(loginInfo.memberId));
        }
      })
      .catch((err: Error) => {
        console.log(err);
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
                    <Button className="kakaoSignin" variant="warning" size="lg">
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
                    onClick={function (e) {
                      e.preventDefault();
                      setRemoveModal("black-bg");

                      navigate("/");
                      window.location.reload();
                      // setRemoveModal("black-bg show-bg");
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
