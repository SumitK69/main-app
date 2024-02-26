import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TicketForm = () => {
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
  };
  // ! Axios method

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> User Name:</Form.Label>
          <Form.Control
            type="text"
            name="Contact Name"
            value={formData["Contact Name"]}
            onChange={handleChange}
            required
            placeholder="User Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> First Name:</Form.Label>
          <Form.Control
            type="text"
            name="First Name"
            value={formData["First Name"]}
            onChange={handleChange}
            required
            placeholder="First Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Subject:</Form.Label>
          <Form.Control
            type="text"
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            required
            placeholder="Subject"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Description:</Form.Label>
          <Form.Control
            type="text"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
            placeholder="Description"
          />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
        {/* //todo:add reset function */}
        <Button variant="warning">Reset</Button>
      </Form>
    </div>
  );
};
export default TicketForm;
