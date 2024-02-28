import React, { useState } from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const InputField = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  outline: none;
  &:focus {
    border-color: #999;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  outline: none;
  height: 100px;
  &:focus {
    border-color: #999;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #00cb79;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #00b268;
  }
`;

function Temp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here (e.g., send to backend server)
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <ContactFormContainer>
      <Title>Get In Touch</Title>
      <Description>
        We'll create high-quality linkable content and build at least 40
        high-authority links to each asset, paving the way for you to grow your
        rankings, improve brand awareness, and generate more leads.
      </Description>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel htmlFor="name">Your Name:</InputLabel>
          <InputField
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Your Email:</InputLabel>
          <InputField
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="subject">Subject:</InputLabel>
          <InputField
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="message">Message:</InputLabel>
          <TextArea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </InputContainer>
      </form>
    </ContactFormContainer>
  );
}
export default Temp;
