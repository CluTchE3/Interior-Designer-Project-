import React, { useEffect, useState } from 'react';
import { getTestimonials } from '../../services/api';
import './Testimonials.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await getTestimonials();
        setTestimonials(res.data.testimonials || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="testimonials-page">
      <section className="page-hero">
        <h1>Client Testimonials</h1>
        <p>Hear from our satisfied clients</p>
      </section>

      <div className="container">
        <section className="testimonials-section section">
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial._id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  {testimonial.clientImage && (
                    <img src={testimonial.clientImage} alt={testimonial.clientName} />
                  )}
                  <div>
                    <p className="author-name">{testimonial.clientName}</p>
                    <p className="author-project">{testimonial.projectType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
