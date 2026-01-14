export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const COLORS = {
  primary: '#1a1a1a',
  secondary: '#2d2d2d',
  accent: '#d4a574',
  accentDark: '#8b7355',
  white: '#ffffff',
  lightGray: '#f5f5f5',
  gray: '#888888',
  darkGray: '#3a3a3a'
};

export const TYPOGRAPHY = {
  heading: "'Cormorant Garamond', serif",
  body: "'Montserrat', sans-serif"
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem'
};

export const SERVICE_TYPES = [
  'Full Interior Design',
  'Space Planning',
  'Consultation',
  '3D Design',
  'Turnkey Projects'
];

export const PROJECT_CATEGORIES = ['Residential', 'Commercial', 'Office'];

export const CONSULTATION_TYPES = ['Virtual', 'On-site'];

export const BUDGET_RANGES = [
  '$10k - $50k',
  '$50k - $100k',
  '$100k+'
];

export const TIMELINE_OPTIONS = [
  'ASAP',
  '1-3 months',
  '3-6 months',
  '6+ months'
];

export const ENQUIRY_STATUS = ['new', 'contacted', 'quoted', 'converted', 'rejected'];

export const BOOKING_STATUS = ['pending', 'confirmed', 'completed', 'cancelled'];

// WhatsApp configuration
export const WHATSAPP_PHONE = '+1234567890';
export const WHATSAPP_MESSAGE = 'Hi, I would like to book a consultation for interior design services.';

// Contact information
export const CONTACT_INFO = {
  email: 'info@interiordesign.com',
  phone: '+1 (234) 567-890',
  address: '123 Design Street, Design City, DC 12345',
  hours: {
    weekday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
};
