/*eslint-disable*/
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useRef, useEffect } from "react";
import "./navbar1.css";

import logo from "./img/HiSEOUL_image2.png";

import Signin from "../signin/signin";
import Signup from "../signup/signup";

function Navbar1() {
  let signinRef = useRef<HTMLDivElement | null>(null);
  let signupRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {});

  function signIn() {
    // divRef.current = 1;
    if (signinRef.current) {
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
  return (
    <div>
      <div className="black-bg" ref={signinRef} /*onClick={leaveSignIn}*/>
        <Signin></Signin>
      </div>

      <div className="black-bg" ref={signupRef} /*onClick={leaveSignUp}*/>
        <Signup></Signup>
      </div>
      {/* sign in 버튼을 클릭하면 'black-bg' 클래스명을 가진 태그를 찾아서 show-bg 클래스를 추가한다. */}
      <div className="navbar">
        <p>HiSEOUL</p>
        <button className="signup-btn" onClick={signUp}>
          Sign up
        </button>
        <button className="signin-btn" onClick={signIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar1;
