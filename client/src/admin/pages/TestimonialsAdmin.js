import React, { useState, useEffect } from 'react';
import { getTestimonials, createTestimonial, deleteTestimonial } from '../../services/api';
import './AdminPages.css';

function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    projectType: '',
    review: '',
    rating: 5
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await getTestimonials();
      setTestimonials(res.data.testimonials || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTestimonial(formData);
      resetForm();
      fetchTestimonials();
    } catch (error) {
      console.error('Error saving testimonial:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteTestimonial(id);
        fetchTestimonials();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ clientName: '', projectType: '', review: '', rating: 5 });
    setShowForm(false);
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Testimonials</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Testimonial'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Client Name *</label>
            <input type="text" name="clientName" value={formData.clientName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Project Type</label>
            <input type="text" name="projectType" value={formData.projectType} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Review *</label>
            <textarea name="review" value={formData.review} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group">
            <label>Rating</label>
            <select name="rating" value={formData.rating} onChange={handleChange}>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Add Testimonial</button>
        </form>
      )}

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Project</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.map(t => (
              <tr key={t._id}>
                <td>{t.clientName}</td>
                <td>{t.projectType}</td>
                <td>{'★'.repeat(t.rating)}</td>
                <td>{t.review.substring(0, 50)}...</td>
                <td>
                  <button className="btn-delete" onClick={() => handleDelete(t._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestimonialsAdmin;
