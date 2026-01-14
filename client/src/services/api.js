import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Projects
export const getProjects = (params) => api.get('/projects', { params });
export const getProject = (id) => api.get(`/projects/${id}`);
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Services
export const getServices = () => api.get('/services');
export const createService = (data) => api.post('/services', data);
export const updateService = (id, data) => api.put(`/services/${id}`, data);
export const deleteService = (id) => api.delete(`/services/${id}`);

// Testimonials
export const getTestimonials = () => api.get('/testimonials');
export const createTestimonial = (data) => api.post('/testimonials', data);
export const updateTestimonial = (id, data) => api.put(`/testimonials/${id}`, data);
export const deleteTestimonial = (id) => api.delete(`/testimonials/${id}`);

// Contact
export const submitEnquiry = (data) => api.post('/contact/enquiry', data);
export const submitBooking = (data) => api.post('/contact/booking', data);
export const getEnquiries = () => api.get('/contact/enquiries');
export const updateEnquiryStatus = (id, status) => 
  api.put(`/contact/enquiry/${id}/status`, { status });
export const getBookings = () => api.get('/contact/bookings');
export const updateBookingStatus = (id, status) => 
  api.put(`/contact/booking/${id}/status`, { status });

// Blogs
export const getBlogs = (params) => api.get('/blogs', { params });
export const getBlog = (slug) => api.get(`/blogs/${slug}`);
export const createBlog = (data) => api.post('/blogs', data);
export const updateBlog = (id, data) => api.put(`/blogs/${id}`, data);
export const deleteBlog = (id) => api.delete(`/blogs/${id}`);

// Auth
export const adminLogin = (email, password) => 
  api.post('/auth/login', { email, password });
export const getAdminProfile = () => api.get('/auth/profile');

export default api;
