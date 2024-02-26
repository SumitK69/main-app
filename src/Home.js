import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CareerPage from "./CareerPage";

function Home() {
  return (
    <div>
      Hello world
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

export default Home;
