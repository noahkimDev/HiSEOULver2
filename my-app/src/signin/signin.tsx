import React from "react";
import "./signin.css";

function Signin() {
  return (
    <div className="container">
      <div className="frame-signin">
        <h1 style={{ textAlign: "center" }}>Sign-in</h1>
        <div className="yourId">
          <h3>your id</h3>

          <input type="text" />
        </div>
        <div className="yourPassword">
          <h3>Password</h3>
          <input type="password" />
        </div>

        <div style={{ display: "flex" }} className="btn-container">
          <button>Complete</button>
          <div style={{ width: "50px" }}></div>
          <button>Sign-up</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
