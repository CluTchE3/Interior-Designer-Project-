import React, { useState, useEffect } from 'react';
import { getProjects, createProject, updateProject, deleteProject } from '../../services/api';
import './AdminPages.css';

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Residential',
    description: '',
    location: '',
    area: '',
    budget: '',
    featured: false
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data.projects || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateProject(editingId, formData);
      } else {
        await createProject(formData);
      }
      resetForm();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteProject(id);
        fetchProjects();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'Residential',
      description: '',
      location: '',
      area: '',
      budget: '',
      featured: false
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project._id);
    setShowForm(true);
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Projects</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Project'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Office">Office</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Area</label>
              <input type="text" name="area" value={formData.area} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Budget</label>
              <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            <label>Featured Project</label>
          </div>

          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update' : 'Create'} Project
          </button>
        </form>
      )}

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>{project.category}</td>
                <td>{project.location}</td>
                <td>{project.featured ? 'Yes' : 'No'}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(project)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(project._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsAdmin;
