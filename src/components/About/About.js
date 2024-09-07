import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroImg from '../../assets/resume_profile.jpg'
import './about.css'

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
            <section id="hero" className='profile-container'>
              <div className='colorModeContainer'>
                <img
                  src={heroImg}
                  className='hero'
                  alt="Profile picture of Harris Johnsen"
                />
              </div>
              <div className='info'>
                <h1 className='hero-name'>
                  Gaurav Singh
                </h1>
                <h2>Full Stack Developer</h2>
                <p className='description'>
                  Hey there! I'm a full-stack developer passionate about crafting with Javascript, frontend to backend. <br/>
                  I love bringing ideas to life in JavaScript.
                </p>
              </div>
            </section>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
