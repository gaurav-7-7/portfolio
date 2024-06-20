import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
          >
            <h2>About Me</h2>
            <p>I am a software engineer with 2 years of experience in Angular, NodeJS, MySQL, MongoDB, and ReactJS.</p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;