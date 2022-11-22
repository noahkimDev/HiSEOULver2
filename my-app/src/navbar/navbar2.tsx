import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import Signin2 from "../signin/signin2";
import Signup2 from "../signup/signup2";
import "./navbar2.css";

const Navbar2 = () => {
  let signinRef = useRef<HTMLDivElement | null>(null);
  let signupRef = useRef<HTMLDivElement | null>(null);

  function signIn() {
    // divRef.current = 1;

    if (signinRef.current) {
      // console.log(signinRef.current);
      signinRef.current.className = "black-bg show-bg";
    }
  }
  function leaveSignIn() {
    // divRef.current = 1;
    if (signinRef.current) {
      signinRef.current.className = "black-bg";
    }
  }

  function signUp() {
    // divRef.current = 1;
    if (signupRef.current) {
      signupRef.current.className = "black-bg show-bg";
    }
  }

  function leaveSignUp() {
    // divRef.current = 1;
    if (signupRef.current) {
      signupRef.current.className = "black-bg";
    }
  }
  function wow() {
    console.log("let's go");
  }

  return (
    <>
      <div className="black-bg" ref={signinRef} /*onClick={leaveSignIn}*/>
        {/* <Signin></Signin> */}
        <Signin2></Signin2>
      </div>
      <div className="black-bg" ref={signupRef} /*onClick={leaveSignUp}*/>
        <Signup2></Signup2>
      </div>
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
                MySEOUl
              </Nav.Link>
            </Nav>
            <Button className="btn" variant="outline-dark" onClick={signIn}>
              Sign In
            </Button>{" "}
            <Button variant="outline-success" onClick={signUp}>
              Sign Up
            </Button>{" "}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;
