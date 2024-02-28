import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Image } from "react-bootstrap";
import Mail from "./icons/mail.png";
import Location from "./icons/location.png";
import Phone from "./icons/phone-call.png";
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    xnQsjsdp: "edbsn1d8d2e6bed3c705918f0969177cffca2",
    xmIwtLD:
      "edbsn961867d6876142915d1a78b75cab80301cb4934c2e66419a39e7825e8d0f07fc",
    xJdfEaS: "",
    actionType: "Q2FzZXM=",
    ReturnURL: "*",
    "First Name": "",
    "Contact Name": "",
    Email: "",
    Subject: "",
    Description: "",
    attachments: [],
  });

  // ! Axios method
  const options = {
    method: "POST",
    url: "https://desk.zoho.in/support/WebToCase",
    params: formData,
  };
  // ! Axios method

  const handleSubmit = (e) => {
    e.preventDefault();
    // ! Axios method
    axios
      .request(options)
      .then(function (response) {
        console.log("response", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    navigate("/formsubmitted");
  };
  // ! Axios method

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const handleReset = () => {
  //   setFormData({
  //     "First Name": "",
  //     "Contact Name": "",
  //     Email: "",
  //     Subject: "",
  //     Description: "",
  //   });
  // };

  return (
    <div className="contact-form-container">
      <h1>Get in Touch</h1>
      <p className="sometext">
        Lorem ipsum dolor sit amet. Ut tempore nesciunt ut voluptatem cumque in
        soluta nisi sed eaque expedita At facilis alias sed numquam itaque. Ad
        tenetur nihil sed quas omnis et ipsa temporibus qui nemo obcaecati aut
        itaque iure et quam magnam.
      </p>
      <div className="contact-form-details">
        <div className="contact-details">
          <Card style={{ borderRadius: "15px", height: "100%" }} bg="warning">
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                Lorem ipsum dolor sit amet. Ut tempore nesciunt ut voluptatem
                cumque in soluta nisi sed eaque expedita
              </Card.Subtitle>
              <div className="details">
                <Card.Text>
                  {" "}
                  <img src={Phone} alt="Phone" /> +910000000000
                </Card.Text>
                <Card.Link href="mailto:your.email@example.com">
                  <Image src={Mail} alt="Mail" />
                  support@ourbroking.zohodesk.in
                </Card.Link>
                <Card.Text>
                  <img src={Location} alt="Location" /> Address Here
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Form className="form-container" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="form-label"> User Name:</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="Contact Name"
              value={formData["Contact Name"]}
              onChange={handleChange}
              required
              placeholder="User Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label"> First Name:</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="First Name"
              value={formData["First Name"]}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-label">Email address:</Form.Label>
            <Form.Control
              className="form-control"
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label"> Subject:</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="Subject"
              value={formData.Subject}
              onChange={handleChange}
              required
              placeholder="Subject"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="form-label"> Description:</Form.Label>
            <Form.Control
              className="form-control"
              type="text"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              require
              placeholder="Description"
            />
          </Form.Group>
          <div className="form-button">
            {/* <Button className="button" variant="warning" onClick={handleReset}>
              Reset
            </Button> */}
            <Button className="button" variant="warning" type="submit">
              <b>Submit</b>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default MyForm;
