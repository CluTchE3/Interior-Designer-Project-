import React from 'react';
import './Legal.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <h1>Privacy Policy</h1>
      </section>
      <div className="container legal-content">
        <h2>Privacy Policy</h2>
        <p>Last updated: January 2026</p>

        <section>
          <h3>1. Introduction</h3>
          <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
        </section>

        <section>
          <h3>2. Information We Collect</h3>
          <p>We collect information you voluntarily provide, such as:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Project details and preferences</li>
            <li>Communication records</li>
            <li>Payment information</li>
          </ul>
        </section>

        <section>
          <h3>3. Use of Information</h3>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about projects</li>
            <li>Process payments</li>
            <li>Send marketing communications</li>
          </ul>
        </section>

        <section>
          <h3>4. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section>
          <h3>5. Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us at privacy@interiordesign.com</p>
        </section>
      </div>
    </div>
  );
}

function TermsConditions() {
  return (
    <div className="legal-page">
      <section className="page-hero">
        <h1>Terms & Conditions</h1>
      </section>
      <div className="container legal-content">
        <h2>Terms & Conditions</h2>
        <p>Last updated: January 2026</p>

        <section>
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section>
          <h3>2. Services</h3>
          <p>We provide interior design consultation and services as described on our website. All services are subject to availability and confirmation.</p>
        </section>

        <section>
          <h3>3. Booking and Cancellation</h3>
          <p>Consultations must be booked through our website. Cancellations must be made at least 48 hours in advance.</p>
        </section>

        <section>
          <h3>4. Payment Terms</h3>
          <p>Payment is due as per the agreed terms. We accept major credit cards and bank transfers.</p>
        </section>

        <section>
          <h3>5. Intellectual Property</h3>
          <p>All content on this website, including designs, images, and text, is the property of our studio or our partners.</p>
        </section>

        <section>
          <h3>6. Limitation of Liability</h3>
          <p>We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.</p>
        </section>

        <section>
          <h3>7. Contact Us</h3>
          <p>For questions about these Terms & Conditions, please contact us at legal@interiordesign.com</p>
        </section>
      </div>
    </div>
  );
}

export { PrivacyPolicy, TermsConditions };
