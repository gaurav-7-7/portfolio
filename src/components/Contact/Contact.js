import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './contact.css';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import config from '../config'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' or 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSnackbarClose = () => {
        setShowSnackbar(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(config.serviceId, config.templateId, e.target, config.userId)
            .then((result) => {
                console.log(result.text);
                setSnackbarSeverity('success');
                setSnackbarMessage('Email sent successfully!');
                setShowSnackbar(true);
                // Reset the form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                setSnackbarSeverity('error');
                setSnackbarMessage('Failed to send email. Please try again later.');
                setShowSnackbar(true);
            });
    };

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5 }}
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
                            {showSnackbar && (
                                <div className={`${snackbarSeverity === 'success' ? 'notification-success' : 'notification-error'}`}>
                                    <p className='notif-message'>{snackbarMessage} <Button className='notif-message close-btn' onClick={handleSnackbarClose}><FaTimes /></Button></p>
                                </div>
                            )}
                        </section>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
