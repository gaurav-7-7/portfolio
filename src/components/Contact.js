import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css'
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <section id="contact" className="container">
                            <h1 className="sectionTitle">Contact</h1>
                            <form action="">
                                <div className="formGroup">
                                    <label htmlFor="name" hidden>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="email" hidden>
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="message" hidden>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        required></textarea>
                                </div>
                                <input className="hover btn" type="submit" value="Submit" />
                            </form>
                        </section>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
