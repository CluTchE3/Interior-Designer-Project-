import axios from 'axios';

// Default to offline mode unless API URL is explicitly provided
const OFFLINE_MODE = true;
const API_BASE_URL = 'http://localhost:5000/api';

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

// Mock data for offline mode
const mockProjects = [
  { id: 1, title: 'Modern Apartment', category: 'Residential', image: '/images/project1.jpg', description: 'Contemporary apartment design' },
  { id: 2, title: 'Luxury Villa', category: 'Residential', image: '/images/project2.jpg', description: 'High-end villa interior' },
];

const mockServices = [
  { id: 1, name: 'Interior Design', description: 'Full interior design services', price: 'Custom' },
  { id: 2, name: 'Space Planning', description: 'Optimized space utilization', price: 'Custom' },
];

const mockTestimonials = [
  { id: 1, name: 'John Doe', role: 'Homeowner', message: 'Excellent design work!', rating: 5 },
  { id: 2, name: 'Jane Smith', role: 'Business Owner', message: 'Professional and creative', rating: 5 },
];

// Projects
export const getProjects = (params) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: mockProjects });
  return api.get('/projects', { params });
};

export const getProject = (id) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: mockProjects.find(p => p.id === parseInt(id)) || {} });
  return api.get(`/projects/${id}`);
};

export const createProject = (data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { id: Date.now(), ...data } });
  return api.post('/projects', data);
};

export const updateProject = (id, data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data });
  return api.put(`/projects/${id}`, data);
};

export const deleteProject = (id) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { success: true } });
  return api.delete(`/projects/${id}`);
};

// Services
export const getServices = () => {
  if (OFFLINE_MODE) return Promise.resolve({ data: mockServices });
  return api.get('/services');
};

export const createService = (data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { id: Date.now(), ...data } });
  return api.post('/services', data);
};

export const updateService = (id, data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data });
  return api.put(`/services/${id}`, data);
};

export const deleteService = (id) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { success: true } });
  return api.delete(`/services/${id}`);
};

// Testimonials
export const getTestimonials = () => {
  if (OFFLINE_MODE) return Promise.resolve({ data: mockTestimonials });
  return api.get('/testimonials');
};

export const createTestimonial = (data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { id: Date.now(), ...data } });
  return api.post('/testimonials', data);
};

export const updateTestimonial = (id, data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data });
  return api.put(`/testimonials/${id}`, data);
};

export const deleteTestimonial = (id) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { success: true } });
  return api.delete(`/testimonials/${id}`);
};

// Contact
export const submitEnquiry = (data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { id: Date.now(), ...data, message: 'Thank you! We will contact you soon.' } });
  return api.post('/contact/enquiry', data);
};

export const submitBooking = (data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { id: Date.now(), ...data, message: 'Booking received! We will confirm shortly.' } });
  return api.post('/contact/booking', data);
};

export const getEnquiries = () => {
  if (OFFLINE_MODE) return Promise.resolve({ data: [] });
  return api.get('/contact/enquiries');
};

export const updateEnquiryStatus = (id, status) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { success: true } });
  return api.put(`/contact/enquiry/${id}/status`, { status });
};

export const getBookings = () => {
  if (OFFLINE_MODE) return Promise.resolve({ data: [] });
  return api.get('/contact/bookings');
};

export const updateBookingStatus = (id, status) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { success: true } });
  return api.put(`/contact/booking/${id}/status`, { status });
};

// Blogs
export const getBlogs = (params) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: [] });
  return api.get('/blogs', { params });
};

export const getBlog = (slug) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { slug, title: 'Sample Blog', content: 'Blog content' } });
  return api.get(`/blogs/${slug}`);
};

export const createBlog = (data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { id: Date.now(), ...data } });
  return api.post('/blogs', data);
};

export const updateBlog = (id, data) => {
  if (OFFLINE_MODE) return Promise.resolve({ data });
  return api.put(`/blogs/${id}`, data);
};

export const deleteBlog = (id) => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { success: true } });
  return api.delete(`/blogs/${id}`);
};

// Auth
export const adminLogin = (email, password) => {
  if (OFFLINE_MODE) {
    // Mock login - accept any credentials in offline mode
    const token = 'mock-token-' + Date.now();
    localStorage.setItem('adminToken', token);
    return Promise.resolve({ data: { token, user: { email, name: 'Admin' } } });
  }
  return api.post('/auth/login', { email, password });
};

export const getAdminProfile = () => {
  if (OFFLINE_MODE) return Promise.resolve({ data: { email: 'admin@design.com', name: 'Admin' } });
  return api.get('/auth/profile');
};

export default api;
