import "./signin2.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import CloseButton from "react-bootstrap/CloseButton";

function Signin2() {
  return (
    <div className="container">
      <div className="signin-frame">
        <h1 style={{ textAlign: "center" }}>Sign-in</h1>
        <Form>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your id</Form.Label>
            <Form.Control placeholder="Enter your id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <div className="signin-button d-grid gap-3">
            <Button variant="info" type="submit" size="lg">
              Sign in
            </Button>
            {"             "}
            <Button variant="outline-success" type="submit" size="lg">
              Close
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signin2;
