# Luxury Interior Design Portfolio - MERN Stack

## Project Structure

```
Interior Design/
├── server/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Blog.js
│   │   ├── Booking.js
│   │   ├── Enquiry.js
│   │   ├── Project.js
│   │   ├── Service.js
│   │   └── Testimonial.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── contactController.js
│   │   ├── projectController.js
│   │   ├── serviceController.js
│   │   └── testimonialController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── bookingRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── enquiryRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── serviceRoutes.js
│   │   └── testimonialRoutes.js
│   ├── utils/
│   │   └── jwt.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── admin/
│   │   │   ├── pages/
│   │   │   │   ├── AdminPages.css
│   │   │   │   ├── BlogsAdmin.js
│   │   │   │   ├── EnquiriesAdmin.js
│   │   │   │   ├── ProjectsAdmin.js
│   │   │   │   ├── ServicesAdmin.js
│   │   │   │   └── TestimonialsAdmin.js
│   │   │   ├── AdminDashboard.css
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminLogin.css
│   │   │   └── AdminLogin.js
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── FloatingWhatsApp.css
│   │   │   │   ├── FloatingWhatsApp.js
│   │   │   │   ├── Modal.css
│   │   │   │   └── Modal.js
│   │   │   ├── layout/
│   │   │   │   ├── Footer.css
│   │   │   │   ├── Footer.js
│   │   │   │   ├── Header.css
│   │   │   │   └── Header.js
│   │   │   ├── pages/
│   │   │   │   ├── About.css
│   │   │   │   ├── About.js
│   │   │   │   ├── Blog.css
│   │   │   │   ├── Blog.js
│   │   │   │   ├── BlogPost.css
│   │   │   │   ├── BlogPost.js
│   │   │   │   ├── Contact.css
│   │   │   │   ├── Contact.js
│   │   │   │   ├── Home.css
│   │   │   │   ├── Home.js
│   │   │   │   ├── Legal.css
│   │   │   │   ├── Legal.js
│   │   │   │   ├── Portfolio.css
│   │   │   │   ├── Portfolio.js
│   │   │   │   ├── PrivacyPolicy.js
│   │   │   │   ├── Process.css
│   │   │   │   ├── Process.js
│   │   │   │   ├── Services.css
│   │   │   │   ├── Services.js
│   │   │   │   ├── TermsConditions.js
│   │   │   │   ├── Testimonials.css
│   │   │   │   └── Testimonials.js
│   │   │   └── sections/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── global.css
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.local
│   ├── package.json
│   └── public/
│       └── index.html
└── .vscode/
    └── launch.json
```

## Installation & Setup

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   - Copy `.env.example` to `.env`
   - Update MongoDB URI, JWT secret, and other settings

4. **Start the server:**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   - Create `.env.local` file with:
     ```
     REACT_APP_API_URL=http://localhost:5000/api
     ```

4. **Start the frontend:**
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000`

## Database Models

### Project Schema
```javascript
{
  title: String,
  description: String,
  category: 'Residential' | 'Commercial' | 'Office',
  location: String,
  area: String,
  budget: String,
  images: [{ url, alt }],
  featured: Boolean,
  testimonial: { clientName, clientImage, review }
}
```

### Service Schema
```javascript
{
  title: String,
  description: String,
  icon: String,
  features: [String],
  price: String,
  order: Number,
  active: Boolean
}
```

### Testimonial Schema
```javascript
{
  clientName: String,
  clientImage: String,
  projectType: String,
  review: String,
  rating: 1-5,
  featured: Boolean,
  verified: Boolean
}
```

### Enquiry Schema
```javascript
{
  name: String,
  email: String,
  phone: String,
  projectType: String,
  budget: String,
  timeline: String,
  location: String,
  description: String,
  status: 'new' | 'contacted' | 'quoted' | 'converted' | 'rejected'
}
```

### Booking Schema
```javascript
{
  name: String,
  email: String,
  phone: String,
  consultationType: 'virtual' | 'onsite',
  date: Date,
  time: String,
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}
```

### Blog Schema
```javascript
{
  title: String,
  slug: String (unique),
  content: String,
  excerpt: String,
  featuredImage: String,
  category: String,
  tags: [String],
  published: Boolean,
  views: Number
}
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get admin profile (protected)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial (admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (admin)

### Contact & Enquiries
- `POST /api/contact/enquiry` - Submit enquiry
- `GET /api/contact/enquiries` - Get all enquiries (admin)
- `PUT /api/contact/enquiry/:id/status` - Update enquiry status (admin)
- `POST /api/contact/booking` - Create booking
- `GET /api/contact/bookings` - Get all bookings (admin)
- `PUT /api/contact/booking/:id/status` - Update booking status (admin)

### Blogs
- `GET /api/blogs` - Get published blogs
- `GET /api/blogs/:slug` - Get single blog
- `POST /api/blogs` - Create blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

## Key Features

✅ **Home Page**: Hero section, featured projects, services overview, testimonials
✅ **Portfolio**: Project gallery with filtering by category, before/after sliders
✅ **Services**: Detailed service descriptions with pricing and process
✅ **About**: Designer profile, philosophy, certifications, awards
✅ **Process**: Step-by-step design workflow visualization
✅ **Testimonials**: Client reviews with ratings
✅ **Blog**: SEO-optimized blog with categories and search
✅ **Contact**: Enquiry form, appointment booking, WhatsApp integration
✅ **Admin Dashboard**: Complete CRUD for projects, services, blogs, enquiries
✅ **Mobile Responsive**: Mobile-first design approach
✅ **Luxury Aesthetic**: Minimal, elegant design with custom color palette
✅ **Fast Performance**: Optimized images, lazy loading, code splitting

## Color Palette

- **Primary**: #1a1a1a (Charcoal)
- **Secondary**: #2d2d2d (Dark Gray)
- **Accent**: #d4a574 (Muted Gold)
- **Background**: #f5f5f5 (Warm White)
- **Text**: #888888 (Medium Gray)

## Typography

- **Headings**: Cormorant Garamond (Serif)
- **Body**: Montserrat (Sans-serif)

## Development Guidelines

1. **Code Organization**: Components are organized by feature/page
2. **Styling**: CSS modules and global styles for consistency
3. **API Integration**: Centralized axios instance in `services/api.js`
4. **State Management**: React hooks and context (expandable to Redux if needed)
5. **Authentication**: JWT-based authentication for admin panel
6. **Error Handling**: Try-catch blocks and error boundary components
7. **Responsive Design**: Mobile-first approach with media queries

## Deployment

### Backend (Heroku/Vercel/AWS)
1. Set environment variables
2. Connect MongoDB Atlas database
3. Deploy server

### Frontend (Vercel/Netlify)
1. Update API URL to production backend
2. Run `npm run build`
3. Deploy to hosting platform

## Next Steps

1. **Add Image Upload**: Implement Multer for image uploads
2. **Email Notifications**: Setup Nodemailer for enquiry confirmations
3. **SEO Optimization**: Add meta tags, structured data
4. **Analytics**: Integrate Google Analytics
5. **Payment Integration**: Add Stripe for paid services
6. **Email Newsletter**: Implement newsletter subscription
7. **Instagram Feed**: Add Instagram feed widget
8. **Calendar Integration**: Add scheduling calendar with availability
9. **Google Maps**: Embed location maps
10. **Performance**: Implement image optimization, caching strategies

## Support

For issues or questions, refer to the component documentation or reach out to the development team.
