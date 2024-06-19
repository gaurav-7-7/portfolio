import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project 1', description: 'Description of project 1' },
  { title: 'Project 2', description: 'Description of project 2' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
          >
            <h2>Projects</h2>
            <Row>
              {projects.map((project, index) => (
                <Col md={4} key={index} className="mb-4">
                  <Card>
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
