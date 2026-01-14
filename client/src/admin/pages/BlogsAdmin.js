import React, { useState, useEffect } from 'react';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../services/api';
import './AdminPages.css';

function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: '',
    published: false
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
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
        await updateBlog(editingId, formData);
      } else {
        await createBlog(formData);
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await deleteBlog(id);
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ title: '', slug: '', content: '', excerpt: '', category: '', published: false });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditingId(blog._id);
    setShowForm(true);
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Blog Posts</h2>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Blog'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Title *</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Slug *</label>
            <input type="text" name="slug" value={formData.slug} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Excerpt</label>
            <input type="text" name="excerpt" value={formData.excerpt} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Content *</label>
            <textarea name="content" value={formData.content} onChange={handleChange} rows="8" required></textarea>
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} />
            <label>Published</label>
          </div>
          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update' : 'Create'} Blog
          </button>
        </form>
      )}

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.published ? 'Published' : 'Draft'}</td>
                <td>
                  <button className="btn-edit" onClick={() => handleEdit(blog)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(blog._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BlogsAdmin;
