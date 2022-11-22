// import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="frame-signup">
      <h1 style={{ textAlign: "center" }}>Sign-up</h1>
      <div className="yourId">
        <h3>your id</h3>
        <input type="text" />
      </div>

      <div className="yourPassword">
        <h3>Password</h3>
        <input type="password" />
      </div>

      <div className="yourPassword">
        <h3>Confirm Password</h3>
        <input type="password" />
      </div>
      <div>
        <button className="signup-button">Complete</button>
      </div>
      {/* <button>가자</button> */}
    </div>
  );
}

export default Signup;
