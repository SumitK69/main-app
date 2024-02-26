import React, { useState } from "react";
import axios from "axios";
// import "./ticketform.css";

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
    attachments: [],
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
  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     attachments: [...formData.attachments, e.target.files[0]],
  //   });
  // };

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
    // handleReset();
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
  // !attachment section
  // const [attachedFiles, setAttachedFiles] = useState([]);
  // const [maxFilesReached, setMaxFilesReached] = useState(false);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   // Implement validation for file size and extensions
  //   if (file) {
  //     setAttachedFiles([...attachedFiles, file]);
  //     console.log("attachedFiles", attachedFiles);
  //     setMaxFilesReached(attachedFiles.length >= 5);
  //   }
  // };

  // const handleRemoveFile = (fileId) => {
  //   setAttachedFiles(attachedFiles.filter((file) => file.id !== fileId));
  //   setMaxFilesReached(attachedFiles.length >= 5);
  // };
  // !attachment section

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label>
        User Name:
        <input
          type="text"
          name="Contact Name"
          value={formData["Contact Name"]}
          onChange={handleChange}
          required
          placeholder="User Name"
        />
      </label>

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

      {/* //!attachment section 

      <label htmlFor="attachment">Attachment:</label>
      <input type="file" multiple onChange={handleFileChange} />
      {attachedFiles.map((file, index) => (
        <div key={file.id}>
          {file.name}
          <button onClick={() => handleRemoveFile(file.id)}>Remove</button>
        </div>
      ))}
      {maxFilesReached && <p>You can attach a maximum of 5 files.</p>}

      //!attachment section */}

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};
export default ContactForm;
