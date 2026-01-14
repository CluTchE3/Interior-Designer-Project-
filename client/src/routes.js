import React, { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Services = lazy(() => import('./components/pages/Services'));
const Portfolio = lazy(() => import('./components/pages/Portfolio'));
const Process = lazy(() => import('./components/pages/Process'));
const Testimonials = lazy(() => import('./components/pages/Testimonials'));
const Blog = lazy(() => import('./components/pages/Blog'));
const BlogPost = lazy(() => import('./components/pages/BlogPost'));
const Contact = lazy(() => import('./components/pages/Contact'));

// Loading component
function LoadingSpinner() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '60vh' 
    }}>
      <p>Loading...</p>
    </div>
  );
}

// Route configuration
export const routes = [
  {
    path: '/',
    component: Home,
    label: 'Home'
  },
  {
    path: '/about',
    component: About,
    label: 'About'
  },
  {
    path: '/services',
    component: Services,
    label: 'Services'
  },
  {
    path: '/portfolio',
    component: Portfolio,
    label: 'Portfolio'
  },
  {
    path: '/process',
    component: Process,
    label: 'Process'
  },
  {
    path: '/testimonials',
    component: Testimonials,
    label: 'Testimonials'
  },
  {
    path: '/blog',
    component: Blog,
    label: 'Blog'
  },
  {
    path: '/blog/:slug',
    component: BlogPost,
    label: 'Blog Post'
  },
  {
    path: '/contact',
    component: Contact,
    label: 'Contact'
  }
];

export { LoadingSpinner };
