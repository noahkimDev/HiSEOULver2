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
  console.log("이놈이 이거", props);
  let [signupModal, setSignupModal] = useState("black-bg");
  let [signinModal, setSigninModal] = useState("black-bg");

  const navigate = useNavigate();
  //
  async function logout() {
    await axios
      .post("http://localhost:8081/auth/logout", "", {
        withCredentials: true,
      }) //
      .then((res) => {
        // navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //

  return (
    <>
      <Signin2 name={signinModal}></Signin2>
      <Signup2 name={signupModal}></Signup2>

      {props.user ? (
        <Navbar bg="white" expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#home">HiSEOUL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="sign-btn">
              <Nav>
                <Nav.Link href="#home" className="mySeoul">
                  {props.user ? `${props.user} 님` : ""}
                </Nav.Link>
              </Nav>
              <Button className="btn" variant="outline-dark" onClick={logout}>
                Logout
              </Button>
            </div>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="white" expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#home">HiSEOUL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#home"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="sign-btn">
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
            </div>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Navbar2;
