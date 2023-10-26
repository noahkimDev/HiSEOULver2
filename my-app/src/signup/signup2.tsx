import "./signup2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Toast from "react-bootstrap/Toast";
import axios from "axios";
import { useState } from "react";

function Signup2(props: any) {
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  let [check, setCheckpw] = useState("");

  // 비번이 다를 경우 공백("") 할당
  let [memberInfo, setMemberInfo] = useState("");
  let [memberInfo2, setMemberInfo2] = useState("");
  let [show, setShow] = useState(true);
  const exitSignup = () => setShow(false);

  const newMemberInfo = async () => {
    console.log("포스트 요청");
    let data = { newId: id, newPw: pw, checkPw: check };
    if (data.newId === "" || data.newPw === "" || data.checkPw === "") {
      alert("please write your information");
    } else if (data.newPw === data.checkPw) {
      await axios
        .post("http://localhost:8081/auth/signup", data, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("signup 성공");
          exitSignup();
        })
        .catch(function (error) {
          console.log(error.response);
          alert(error.response.data);
        });

      data.newId = "";
      data.newPw = "";
      data.checkPw = "";
    } else if (data.newPw !== data.checkPw) {
      alert("password is not same");
      setMemberInfo("");
      setMemberInfo2("");
    }
  };

  return (
    <>
      {show && (
        <div className={props.name}>
          <div className="container">
            <div className="signup-frame">
              <h1 style={{ textAlign: "center" }}>Sign-up</h1>
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
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="yourpw"
                    type="password"
                    placeholder="Password"
                    onChange={function (e) {
                      setPw(e.target.value);
                      setMemberInfo(e.target.value);
                    }}
                    // useState를 이용해서 작성값이 그때그때 업데이트 됨.
                    value={memberInfo}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Check your password"
                    onChange={function (e) {
                      setCheckpw(e.target.value);
                      setMemberInfo2(e.target.value);
                    }}
                    value={memberInfo2}
                  />
                </Form.Group>

                <div className="signin-button d-grid gap-3">
                  <Button
                    variant="warning"
                    type="submit"
                    size="lg"
                    onClick={function (e) {
                      e.preventDefault();
                      newMemberInfo();
                    }}
                  >
                    Sign Up
                  </Button>

                  {"             "}
                  <Button variant="outline-success" type="submit" size="lg">
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

export default Signup2;
