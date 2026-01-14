import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal';
import { getProjects, getServices, getTestimonials } from '../../services/api';
import './Home.css';

function Home() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, servicesRes, testimonialsRes] = await Promise.all([
          getProjects({ featured: true }),
          getServices(),
          getTestimonials(),
        ]);
        
        setProjects(projectsRes.data.projects?.slice(0, 6) || []);
        setServices(servicesRes.data.services?.slice(0, 5) || []);
        setTestimonials(testimonialsRes.data.testimonials?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">Designing Timeless Interiors</h1>
          <p className="hero-subtitle fade-in">That Reflect Your Lifestyle</p>
          <button 
            className="btn btn-primary fade-in"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Consultation
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Curated selection of our most distinctive work</p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project._id} className="project-card">
                <div className="project-image-wrapper">
                  {project.images?.[0] && (
                    <img 
                      src={project.images[0].url} 
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                  <div className="project-overlay">
                    <Link to={`/portfolio`} className="btn btn-secondary btn-sm">
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="text-muted">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link to="/portfolio" className="btn btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-overview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive design solutions tailored to your needs</p>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service._id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by discerning homeowners and businesses</p>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="testimonial-card">
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  {testimonial.clientImage && (
                    <img 
                      src={testimonial.clientImage} 
                      alt={testimonial.clientName}
                      className="author-image"
                    />
                  )}
                  <div>
                    <p className="author-name">{testimonial.clientName}</p>
                    <p className="author-role">{testimonial.projectType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link to="/testimonials" className="btn btn-secondary">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Schedule a consultation with our design team</p>
          <button 
            className="btn btn-primary"
            onClick={() => setIsBookingOpen(true)}
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      <Modal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        title="Book Your Consultation"
      >
        <BookingForm onClose={() => setIsBookingOpen(false)} />
      </Modal>
    </div>
  );
}

function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'virtual',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit booking via API
    console.log(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Consultation Type</label>
        <select name="consultationType" value={formData.consultationType} onChange={handleChange}>
          <option value="virtual">Virtual</option>
          <option value="onsite">On-site</option>
        </select>
      </div>

      <div className="form-group">
        <label>Preferred Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
        Book Consultation
      </button>
    </form>
  );
}

export default Home;
