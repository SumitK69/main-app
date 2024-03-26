import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import CareerPage from "./CareerPage";
import Modal from "react-bootstrap/Modal";
import MyForm from "./myform";

function Home() {
  const [show, setShow] = useState(false);

  return (
    <div>
      Hello world
      <ul>
        <li>
          <Button variant="warning" onClick={() => setShow(true)}>
            form
          </Button>
          <Modal
            // className="form-model"
            size="xl"
            show={show}
            onHide={() => setShow(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Contact form
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MyForm />
            </Modal.Body>
          </Modal>
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
