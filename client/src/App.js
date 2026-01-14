import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Process from './components/pages/Process';
import Testimonials from './components/pages/Testimonials';
import Blog from './components/pages/Blog';
import BlogPost from './components/pages/BlogPost';
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsConditions from './components/pages/TermsConditions';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

import './styles/global.css';

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    !!localStorage.getItem('adminToken')
  );

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route 
              path="/admin/login" 
              element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} 
            />
            <Route 
              path="/admin/*" 
              element={isAdminLoggedIn ? <AdminDashboard /> : <AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} 
            />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
