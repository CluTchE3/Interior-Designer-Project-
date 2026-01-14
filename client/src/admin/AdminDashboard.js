import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './AdminDashboard.css';

import ProjectsAdmin from './pages/ProjectsAdmin';
import ServicesAdmin from './pages/ServicesAdmin';
import TestimonialsAdmin from './pages/TestimonialsAdmin';
import EnquiriesAdmin from './pages/EnquiriesAdmin';
import BlogsAdmin from './pages/BlogsAdmin';

function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <aside className={`admin-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        </div>

        <nav className="admin-nav">
          <Link to="/admin/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/admin/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/admin/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link to="/admin/enquiries" onClick={() => setMenuOpen(false)}>Enquiries</Link>
          <Link to="/admin/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        </nav>

        <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="admin-main">
        <div className="admin-header">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰ Menu
          </button>
        </div>

        <div className="admin-content">
          <Routes>
            <Route path="projects" element={<ProjectsAdmin />} />
            <Route path="services" element={<ServicesAdmin />} />
            <Route path="testimonials" element={<TestimonialsAdmin />} />
            <Route path="enquiries" element={<EnquiriesAdmin />} />
            <Route path="blogs" element={<BlogsAdmin />} />
            <Route path="/" element={<DashboardHome />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function DashboardHome() {
  return (
    <div className="dashboard-home">
      <h1>Welcome to Admin Dashboard</h1>
      <p>Select a section from the menu to manage your content.</p>
    </div>
  );
}

export default AdminDashboard;
