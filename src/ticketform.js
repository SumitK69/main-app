import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
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
  });
  // ! Axios method
  const options = {
    method: "POST",
    url: "https://desk.zoho.in/support/WebToCase",
    params: formData,
  };
  // ! Axios method

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
    // ! Axios method

    // ! Fetch Method
    // const options = {
    //   method: "POST",
    //   headers: {
    //     cookie:
    //       "2eed0b67fd=f369298bdcaa504163502a5596fe31d7; crmcsr=8c423b47-abaa-4edf-8a61-6797c7b74d50; _zcsr_tmp=8c423b47-abaa-4edf-8a61-6797c7b74d50",
    //     "User-Agent": "insomnia/2023.5.8",
    //   },
    // };

    // fetch(
    //   `https://desk.zoho.in/support/WebToCase?xnQsjsdp=${
    //     formData.xnQsjsdp
    //   }&xmIwtLD=${formData.xmIwtLD}&xJdfEaS=${formData.xJdfEaS}&actionType=${
    //     formData.actionType
    //   }&First%20Name=${encodeURIComponent(
    //     formData["First Name"]
    //   )}&Contact%20Name=${encodeURIComponent(
    //     formData["Contact Name"]
    //   )}&Email=${encodeURIComponent(
    //     formData.Email
    //   )}&Subject=${encodeURIComponent(
    //     formData.Subject
    //   )}&Description=${encodeURIComponent(formData.Description)}`,
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));
    // ! Fetch Method

    console.log("Form submitted:", formData);
    alert("ticket is submitted");
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      "First Name": "",
      "Contact Name": "",
      Email: "",
      Subject: "",
      Description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label>
        First Name:
        <input
          type="text"
          name="First Name"
          value={formData["First Name"]}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="Contact Name"
          value={formData["Contact Name"]}
          onChange={handleChange}
          required
          placeholder="Last Name"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </label>

      <label>
        Subject:
        <input
          type="text"
          name="Subject"
          value={formData.Subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="Description"
          value={formData.Description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
      </label>

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default ContactForm;
