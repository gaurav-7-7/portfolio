import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import resume from '../../assets/gaurav_singh_resume.pdf';
import resumeImg from '../../assets/resume_gaurav_singh.jpg'
import './resume.css'

const Resume = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
          >
            <Card className="mt-5">
              <Card.Header as="h5" className='resume-header'>
                My Resume
                <Button
                  className='download-btn'
                  as="a"
                  href={resume}
                  download="gaurav_singh_resume.pdf"
                  variant="primary"
                >
                  Download
                </Button>
              </Card.Header>
              <Card.Body className='resume-body'>
                <Card.Text>
                  {/* <iframe
                    src={resume}
                    width="100%"
                    height="600px"
                    style={{ border: 'none' }}
                    title="Resume"
                  /> */}
                  <img src={resumeImg} alt="Resume Page 1" className="resume-image" />
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
