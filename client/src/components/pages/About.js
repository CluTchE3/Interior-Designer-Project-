import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <h1>About Our Studio</h1>
        <p>Crafting luxury interiors since 2015</p>
      </section>

      <div className="container">
        <section className="about-intro section">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>We are a team of passionate interior designers dedicated to creating timeless, elegant spaces that reflect our clients' lifestyles and values. With over 20 years of combined experience, we specialize in luxury residential and commercial design.</p>
              <p>Our philosophy is simple: great design is invisible. It feels effortless, natural, and perfectly suited to the people who inhabit the space. We believe in listening, understanding, and transforming visions into reality.</p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">Designer Image</div>
            </div>
          </div>
        </section>

        <section className="design-philosophy section">
          <h2 className="section-title">Our Design Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Timeless Elegance</h3>
              <p>We create spaces that transcend trends, focusing on enduring beauty and quality craftsmanship.</p>
            </div>
            <div className="philosophy-item">
              <h3>Personal Connection</h3>
              <p>Every project begins with understanding you—your lifestyle, preferences, and aspirations.</p>
            </div>
            <div className="philosophy-item">
              <h3>Attention to Detail</h3>
              <p>From color palettes to hardware selection, every element is thoughtfully curated.</p>
            </div>
            <div className="philosophy-item">
              <h3>Sustainable Practice</h3>
              <p>We prioritize eco-friendly materials and ethical sourcing without compromising on luxury.</p>
            </div>
          </div>
        </section>

        <section className="certifications section">
          <h2 className="section-title">Certifications & Awards</h2>
          <ul className="certifications-list">
            <li>NCIDQ Certified Interior Designer</li>
            <li>ASID Professional Member</li>
            <li>Winner: Best Interior Designer 2023</li>
            <li>Featured in Luxury Home Magazine</li>
            <li>Sustainable Design Certification</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
