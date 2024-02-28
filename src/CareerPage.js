import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CareerPage = () => {
  const jobOpenings = [
    {
      title: "Software Engineer",
      description:
        "We are looking for a skilled software engineer to join our team...",
      requirements: [
        "Bachelor’s degree in Computer Science",
        "Experience with React and Node.js",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "UX/UI Designer",
      description:
        "We are seeking a creative UX/UI designer to improve the user experience of our products...",
      requirements: [
        "Proven experience in designing user interfaces",
        "Familiarity with design tools like Figma or Sketch",
      ],
    },
    // todo: Add more job openings as needed
  ];

  return (
    <Container>
      <h1 className="my-4">Join Our Team</h1>
      <Row>
        {jobOpenings.map((job, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
                <Card.Text>
                  <strong>Requirements:</strong>
                  <ul>
                    {job.requirements.map((requirement, i) => (
                      <li key={i}>{requirement}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Button variant="warning">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CareerPage;
