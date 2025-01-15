import React, { useState, useEffect } from 'react';
import './Contactus.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent successfully!");
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    // Effect to log form data changes
    useEffect(() => {
        console.log("Form Data Updated:", formData);
    }, [formData]);

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-row">
                    <div className="contact-form-col">
                        <h3 className="contact-title">Send us a message</h3>
                        <form
                            id="contactForm"
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Name"
                                    onChange={handleInputChange}
                                    value={formData.name}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                    value={formData.email}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    placeholder="Subject"
                                    onChange={handleInputChange}
                                    value={formData.subject}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Message"
                                    cols="30"
                                    rows="6"
                                    onChange={handleInputChange}
                                    value={formData.message}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="contact-info-col">
                        <h3 className="info-title">Contact us</h3>
                        <p className="info-description mb-4">
                            We're open for any suggestion or just to have a chat
                        </p>
                        <div className="info-box">
                            <div className="icon-wrapper">
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <div className="text-wrapper">
                                <p>
                                    <span>Address:</span> 198 West 21st Street, Suite 721, New York NY 10016
                                </p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="icon-wrapper">
                                <span className="fa fa-phone"></span>
                            </div>
                            <div className="text-wrapper">
                                <p>
                                    <span>Phone:</span>
                                    <a href="tel://123456789">+1235 2355 98</a>
                                </p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="icon-wrapper">
                                <span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="text-wrapper">
                                <p>
                                    <span>Email:</span>
                                    <a href="mailto:info@yoursite.com">
                                        info@yoursite.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="icon-wrapper">
                                <span className="fa fa-globe"></span>
                            </div>
                            <div className="text-wrapper">
                                <p>
                                    <span>Website:</span>
                                    <a href="#">yoursite.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
