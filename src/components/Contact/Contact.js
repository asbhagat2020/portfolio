import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import emailjs from '@emailjs/browser'; // Import emailjs
import './ContactMe.css'; // External CSS for styling

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // To handle loading state
  const [errorMsg, setErrorMsg] = useState(''); // To handle error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }
    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setLoading(true); // Start loading
      setErrorMsg(''); // Reset error message
  
      // Prepare the template params for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };
  
      // Send email using emailjs
      emailjs.send(
        'service_erxdpg9', // Replace with your EmailJS service ID
        'template_hxjf6zb', // Replace with your EmailJS template ID
        templateParams,
        'maYo88lFD2J5IZDeJ' // Replace with your EmailJS user ID
      )
      .then((response) => {
        setSubmitted(true);
        setLoading(false); // Stop loading
  
        // Reset form fields after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
  
        // Optionally, reset errors
        setErrors({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setLoading(false); // Stop loading
        setErrorMsg('Failed to send message. Please try again later.');
      });
    }
  };
  

  return (
    <Container fluid className="contact-me-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          {/* Left Column for Contact Information */}
          <Col md={5} className="contact-info">
            <h2 className="contact-heading">Get in Touch</h2>
            <ul className="contact-details">
              <li><AiFillPhone className="contact-icon" /> +91 94233-81870</li>
              <li><AiOutlineMail className="contact-icon" /> asbhagat2020@gmail.com</li>
              <li><FaLinkedinIn className="contact-icon" />
                <a href="https://www.linkedin.com/in/ashwin-bt/" target="_blank" rel="noopener noreferrer">
                   Ashwin Bhagat
                </a>
              </li>
              <li>
                <FaGithub className="contact-icon" />
                <a href="https://github.com/asbhagat2020" target="_blank" rel="noopener noreferrer">
                asbhagat2020
                </a>
              </li>
            </ul>
          </Col>

          {/* Right Column for Form */}
          <Col md={7}>
            <h1 className="contact-heading">Contact <strong className="purple">Me</strong></h1>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" style={{marginTop:'20px'}} disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            </Form>
            {submitted && <div className="form-success">Thank you for reaching out! I'll get back to you soon.</div>}
            {errorMsg && <div className="form-error">{errorMsg}</div>}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactMe;
