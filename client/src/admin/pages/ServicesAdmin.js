import React, { useState, useEffect } from 'react';
import { getServices, createService, updateService, deleteService } from '../../services/api';
import './AdminPages.css';

function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    order: 0
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getServices();
      setServices(res.data.services || []);
    } catch (error) {
      console.error('Error fetching services:', error);
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
      if (editingId) {
        await updateService(editingId, formData);
      } else {
        await createService(formData);
      }
      resetForm();
      fetchServices();
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteService(id);
        fetchServices();
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', price: '', order: 0 });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (service) => {
    setFormData(service);
    setEditingId(service._id);
    setShowForm(true);
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Services</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Service'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Title *</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Price</label>
              <input type="text" name="price" value={formData.price} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Order</label>
              <input type="number" name="order" value={formData.order} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update' : 'Create'} Service
          </button>
        </form>
      )}

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service._id}>
                <td>{service.title}</td>
                <td>{service.price}</td>
                <td>{service.order}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(service)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(service._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServicesAdmin;
