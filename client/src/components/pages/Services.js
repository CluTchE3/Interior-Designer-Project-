import React, { useEffect, useState } from 'react';
import { getServices } from '../../services/api';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServices();
        setServices(res.data.services || []);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="services-page">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive design solutions for every space</p>
      </section>

      <div className="container">
        <section className="services-intro section">
          <h2>What We Offer</h2>
          <p>From concept to completion, we provide end-to-end interior design services tailored to your needs and budget.</p>
        </section>

        <section className="services-list section">
          {services.map((service, index) => (
            <div key={service._id} className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.features && (
                  <ul className="features-list">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="process-section section">
          <h2 className="section-title">Our Design Process</h2>
          <div className="process-steps">
            {[
              { num: '1', title: 'Consultation', desc: 'We meet to understand your vision, lifestyle, and budget' },
              { num: '2', title: 'Mood Board', desc: 'Creating a cohesive visual concept for your space' },
              { num: '3', title: '3D Visualization', desc: 'Presenting detailed renderings of the final design' },
              { num: '4', title: 'Material Selection', desc: 'Sourcing premium materials and finishes' },
              { num: '5', title: 'Execution', desc: 'Overseeing all aspects of implementation' },
              { num: '6', title: 'Handover', desc: 'Final styling and ensuring your complete satisfaction' }
            ].map((step) => (
              <div key={step.num} className="process-step">
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing-section section">
          <h2 className="section-title">Pricing & Investment</h2>
          <p className="section-subtitle">Design solutions for every budget</p>
          
          <div className="pricing-cards">
            {[
              { title: 'Consultation', price: '$500', desc: 'Initial design consultation' },
              { title: 'Space Planning', price: 'From $2,500', desc: 'Layout and floor plan design' },
              { title: 'Full Design', price: 'Custom Quote', desc: 'Complete interior redesign' }
            ].map((pkg, i) => (
              <div key={i} className="pricing-card">
                <h3>{pkg.title}</h3>
                <p className="price">{pkg.price}</p>
                <p>{pkg.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
