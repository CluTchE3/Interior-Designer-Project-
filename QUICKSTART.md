# Quick Start Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas cloud)
- Git (optional)

## One-Command Setup (Recommended)

From the root directory:

```bash
npm run install-all
```

This will install dependencies for both server and client.

## Manual Setup

### Step 1: Backend Setup

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/interior_design
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:3000
```

Start the server:
```bash
npm run dev
```

The server runs on `http://localhost:5000`

### Step 2: Frontend Setup

```bash
cd client
npm install
```

The `.env.local` is pre-configured. If needed, update `REACT_APP_API_URL`.

Start the frontend:
```bash
npm start
```

The frontend runs on `http://localhost:3000`

### Step 3: Run Both Together

From the root directory:
```bash
npm run dev
```

This starts both server and client simultaneously.

## Access the Application

- **Public Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login
  - Default email: admin@example.com (configure in `.env`)
  - Password: SecurePassword123 (configure in `.env`)

## Initial Setup Checklist

- [ ] Install Node.js
- [ ] Create MongoDB database
- [ ] Clone/download project
- [ ] Run `npm run install-all`
- [ ] Configure `.env` files
- [ ] Start development servers
- [ ] Create admin user in database
- [ ] Add initial content through admin panel

## Database Setup

### MongoDB Atlas (Cloud - Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Add to `.env`: `MONGODB_URI=...`

### Local MongoDB

```bash
# Install MongoDB locally
# Start MongoDB service
mongod

# Connection string for local
MONGODB_URI=mongodb://localhost:27017/interior_design
```

## Create Admin User

Connect to MongoDB and run:

```javascript
db.admins.insertOne({
  email: "admin@example.com",
  password: "hashed_password_here", // Hash using bcrypt
  name: "Admin",
  role: "admin",
  active: true
})
```

Or use the application API to create during setup.

## Project Structure Overview

```
project/
├── server/          # Express.js backend
│   ├── models/      # MongoDB schemas
│   ├── controllers/ # Business logic
│   ├── routes/      # API endpoints
│   └── .env         # Environment variables
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── admin/       # Admin dashboard
│   │   ├── services/    # API calls
│   │   └── styles/      # CSS files
│   └── .env.local   # Environment variables
└── package.json     # Root scripts
```

## Available Scripts

### Root Level
```bash
npm run dev          # Run both server and client
npm run install-all  # Install all dependencies
npm run build        # Build production frontend
npm run server       # Run backend only
npm run client       # Run frontend only
```

### Backend (`cd server`)
```bash
npm run dev         # Development mode with nodemon
npm start           # Production mode
npm test            # Run tests
```

### Frontend (`cd client`)
```bash
npm start           # Development server
npm run build       # Production build
npm run test        # Run tests
npm run eject       # Eject from Create React App
```

## Common Issues & Solutions

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=5001 npm run dev
```

### MongoDB Connection Error
- Check `.env` has correct `MONGODB_URI`
- Verify MongoDB is running (for local installations)
- Check internet connection (for MongoDB Atlas)
- Verify IP whitelist in MongoDB Atlas

### CORS Errors
- Check `CLIENT_URL` in server `.env`
- Ensure frontend URL matches CORS configuration

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Environment Variables Template

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Client (.env.local)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Next Steps After Setup

1. **Add Admin User**
   - Login to MongoDB
   - Create admin record

2. **Populate Content**
   - Use admin panel to add projects
   - Add services
   - Create blog posts

3. **Customize**
   - Update contact information
   - Add business details
   - Customize color scheme in `global.css`

4. **Add Images**
   - Setup image uploads
   - Add project images
   - Add testimonial photos

5. **Deploy**
   - Choose hosting (Heroku, Vercel, AWS, etc.)
   - Configure production `.env`
   - Deploy backend and frontend

## Support & Documentation

For detailed API documentation, refer to `SETUP_GUIDE.md`

For component documentation, check individual component files.

## Troubleshooting

### 1. App won't start
```bash
# Check Node version
node --version

# Clear cache
npm cache clean --force

# Reinstall
rm -rf node_modules && npm install
```

### 2. API calls not working
- Check backend is running on correct port
- Verify `REACT_APP_API_URL` is correct
- Check browser console for errors

### 3. Database errors
- Verify MongoDB connection string
- Check database exists
- Verify collections have proper indexes

### 4. Admin login fails
- Reset admin credentials in database
- Check `.env` file syntax
- Verify JWT_SECRET is set

## Production Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure production `.env` files
- [ ] Set strong `JWT_SECRET`
- [ ] Enable HTTPS
- [ ] Setup error monitoring
- [ ] Configure backups
- [ ] Test all API endpoints
- [ ] Optimize images
- [ ] Setup analytics
- [ ] Configure email notifications
- [ ] Create staging environment
- [ ] Document deployment process

## Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress before upload
   - Implement lazy loading

2. **Code Splitting**
   - Lazy load routes
   - Code splitting in components

3. **Caching**
   - Browser cache
   - API response cache
   - Database query cache

4. **Monitoring**
   - Setup logging
   - Monitor API response times
   - Track user analytics

## Security Considerations

1. **Authentication**
   - Secure JWT tokens
   - HTTPS only
   - CORS configured properly

2. **Validation**
   - Input validation on client
   - Server-side validation
   - Sanitize database queries

3. **API Security**
   - Rate limiting
   - Request validation
   - Error handling (don't expose sensitive data)

4. **Database**
   - Use strong passwords
   - Regular backups
   - Monitor access logs
