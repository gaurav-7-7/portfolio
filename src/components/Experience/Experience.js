import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
          >
            <h2>Experience</h2>
            <ul>
              <li>Company 1 - Software Engineer (Year-Year)</li>
              <li>Company 2 - Software Engineer (Year-Year)</li>
            </ul>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
