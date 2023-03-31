import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import Signin2 from "../signin/signin2";
import Signup2 from "../signup/signup2";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./navbar2.css";

const Navbar2 = (props: any) => {
  //
  const navigate = useNavigate();
  //
  async function logout() {
    await axios
      .post("http://localhost:8081/auth/logout", "", {
        withCredentials: true,
      }) //
      .then((res) => {
        console.log("로그아웃 성공", res);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //

  const checkSignin = useSelector((state: any) => state.checkMember.member);
  // console.log("바꼈", checkSignin);
  let [signupModal, setSignupModal] = useState("black-bg");
  let [signinModal, setSigninModal] = useState("black-bg");
  console.log("가나다라", props.user);
  return (
    <>
      <Signin2 name={signinModal}></Signin2>
      <Signup2 name={signupModal}></Signup2>

      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">HiSEOUL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="sign-btn">
            <Nav>
              <Nav.Link href="#home" className="mySeoul">
                {props.user ? `${props.user} 님` : ""}
              </Nav.Link>
            </Nav>
            {props.user ? (
              <>
                <Button className="btn" variant="outline-dark" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="btn"
                  variant="outline-dark"
                  onClick={() => {
                    setSigninModal("black-bg show-bg");
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="outline-success"
                  onClick={() => {
                    setSignupModal("black-bg show-bg");
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outline-success"
                  onClick={() => {
                    navigate("/festivals");
                    window.location.reload();
                  }}
                >
                  Try
                </Button>
              </>
            )}
            {/* <Button
              className="btn"
              variant="outline-dark"
              onClick={() => {
                setSigninModal("black-bg show-bg");
              }}
            >
              Sign In
            </Button>
            <Button
              variant="outline-success"
              onClick={() => {
                setSignupModal("black-bg show-bg");
              }}
            >
              Sign Up
            </Button>{" "} */}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

// const buttonChg = (props: any) => {
//   let [signupModal, setSignupModal] = useState("black-bg");
//   let [signinModal, setSigninModal] = useState("black-bg");

//   if (props) {
//     return (
//       <>
//         <Button
//           className="btn"
//           variant="outline-dark"
//           onClick={() => {
//             setSigninModal("black-bg show-bg");
//           }}
//         >
//           Logout
//         </Button>{" "}
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Button
//           className="btn"
//           variant="outline-dark"
//           onClick={() => {
//             setSigninModal("black-bg show-bg");
//           }}
//         >
//           Sign In
//         </Button>{" "}
//         <Button
//           variant="outline-success"
//           onClick={() => {
//             setSignupModal("black-bg show-bg");
//           }}
//         >
//           Sign Up
//         </Button>{" "}
//       </>
//     );
//   }
// };

export default Navbar2;
