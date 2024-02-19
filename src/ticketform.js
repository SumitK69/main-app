import React, { useState } from "react";
// import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    xnQsjsdp: "edbsn1d8d2e6bed3c705918f0969177cffca2",
    xmIwtLD:
      "edbsn961867d6876142915d1a78b75cab80301cb4934c2e66419a39e7825e8d0f07fc",
    xJdfEaS: "",
    actionType: "Q2FzZXM=",
    returnURL: "https&#x3a;&#x2f;&#x2f;main-app-7qi.pages.dev&#x2f;",
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    description: "",
  });
  // const options = {
  //   method: "POST",
  //   url: "https://desk.zoho.in/support/WebToCase",
  //   params: formData,
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log("response", response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    const options = {
      method: "POST",
      headers: {
        cookie:
          "2eed0b67fd=f369298bdcaa504163502a5596fe31d7; crmcsr=8c423b47-abaa-4edf-8a61-6797c7b74d50; _zcsr_tmp=8c423b47-abaa-4edf-8a61-6797c7b74d50",
        "User-Agent": "insomnia/2023.5.8",
      },
    };

    fetch(
      `https://desk.zoho.in/support/WebToCase?xnQsjsdp=edbsn1d8d2e6bed3c705918f0969177cffca2&xmIwtLD=edbsn961867d6876142915d1a78b75cab80301cb4934c2e66419a39e7825e8d0f07fc&xJdfEaS=&actionType=Q2FzZXM%3D&First%20Name=${encodeURIComponent(
        formData.firstname
      )}&Contact%20Name=${encodeURIComponent(
        formData.contactName
      )}&Email=${encodeURIComponent(
        formData.email
      )}&Subject=${encodeURIComponent(
        formData.subject
      )}&Description=${encodeURIComponent(formData.description)}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    // You can handle the form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      description: "",
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
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          placeholder="Last Name"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </label>

      <label>
        Subject:
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </label>

      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
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
