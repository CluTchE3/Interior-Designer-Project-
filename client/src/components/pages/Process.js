import React from 'react';
import './Process.css';

function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We begin by understanding your lifestyle, aesthetic preferences, functional needs, and budget. This foundation allows us to create a design that truly reflects who you are.'
    },
    {
      number: '02',
      title: 'Mood Board & Concept',
      description: 'Our team develops a cohesive visual concept featuring color palettes, materials, furniture styles, and design elements that align with your vision.'
    },
    {
      number: '03',
      title: '3D Design & Visualization',
      description: 'We create detailed 3D renderings showing furniture placement, colors, and overall ambiance, giving you a clear preview of the final space.'
    },
    {
      number: '04',
      title: 'Material & Finishes',
      description: 'Selection of premium materials, fabrics, flooring, paint colors, and hardware from our curated network of trusted suppliers.'
    },
    {
      number: '05',
      title: 'Implementation & Supervision',
      description: 'Our team oversees all aspects of execution, from contractors to deliveries, ensuring quality and timeline adherence.'
    },
    {
      number: '06',
      title: 'Final Styling & Handover',
      description: 'Completing the space with final touches, styling, and ensuring your complete satisfaction with the transformation.'
    }
  ];

  return (
    <div className="process-page">
      <section className="page-hero">
        <h1>How We Work</h1>
        <p>A collaborative journey from concept to reality</p>
      </section>

      <div className="container">
        <section className="process-detailed section">
          <div className="process-timeline">
            {steps.map((step, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-number">{step.number}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Process;
