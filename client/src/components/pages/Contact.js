import React, { useState } from 'react';
import { submitEnquiry } from '../../services/api';
import './Contact.css';

function Contact() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
    description: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitEnquiry(enquiryForm);
      setMessage('Thank you for your enquiry. We will contact you soon!');
      setEnquiryForm({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        location: '',
        description: ''
      });
    } catch (error) {
      setMessage('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear about your project</p>
      </section>

      <div className="container">
        <section className="contact-section section">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-item">
                <h4>Email</h4>
                <p><a href="mailto:info@interiordesign.com">info@interiordesign.com</a></p>
              </div>

              <div className="info-item">
                <h4>Phone</h4>
                <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
              </div>

              <div className="info-item">
                <h4>Address</h4>
                <p>123 Design Street<br/>Design City, DC 12345</p>
              </div>

              <div className="info-item">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <h2>Send Us an Enquiry</h2>
              
              {message && <p className="form-message">{message}</p>}

              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={enquiryForm.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={enquiryForm.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={enquiryForm.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Project Type</label>
                <select name="projectType" value={enquiryForm.projectType} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Office">Office</option>
                </select>
              </div>

              <div className="form-group">
                <label>Budget Range</label>
                <select name="budget" value={enquiryForm.budget} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="$10k-$50k">$10k - $50k</option>
                  <option value="$50k-$100k">$50k - $100k</option>
                  <option value="$100k+">$100k+</option>
                </select>
              </div>

              <div className="form-group">
                <label>Timeline</label>
                <select name="timeline" value={enquiryForm.timeline} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                </select>
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={enquiryForm.location}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Project Description</label>
                <textarea
                  name="description"
                  value={enquiryForm.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Enquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
