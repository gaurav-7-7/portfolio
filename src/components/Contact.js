import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = 'Visited portfolio';
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Reset the form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

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
                            <form onSubmit={handleSubmit}>
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
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="email" hidden>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
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
