import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function FormSubmit() {
  return (
    <div>
      <h1>form submitted successfully...</h1>;
      <ul>
        <li>
          <Link to="/form">
            <Button variant="warning">Form</Button>
          </Link>
        </li>
        <br />
        <li>
          <Link to="/career">
            <Button variant="warning">Career</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FormSubmit;
