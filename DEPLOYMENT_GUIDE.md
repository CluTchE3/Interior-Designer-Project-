# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] MongoDB production instance set up
- [ ] SSL certificate obtained
- [ ] Admin credentials created
- [ ] All features tested locally
- [ ] Code reviewed
- [ ] Database backups configured
- [ ] Error logging set up
- [ ] CDN configured (optional)
- [ ] DNS configured

---

## Backend Deployment

### Option 1: Heroku (Easiest)

#### Prerequisites
- Heroku account
- Heroku CLI installed

#### Steps

1. **Login to Heroku:**
```bash
heroku login
```

2. **Create Heroku app:**
```bash
heroku create your-app-name
```

3. **Set environment variables:**
```bash
heroku config:set MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
heroku config:set JWT_SECRET=your_secure_secret
heroku config:set CLIENT_URL=https://your-domain.com
heroku config:set NODE_ENV=production
```

4. **Deploy:**
```bash
git push heroku main
```

5. **View logs:**
```bash
heroku logs --tail
```

### Option 2: AWS EC2

#### Prerequisites
- AWS account
- SSH access to EC2 instance
- Node.js installed on instance

#### Steps

1. **SSH into instance:**
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

2. **Install dependencies:**
```bash
sudo apt update
sudo apt install nodejs npm mongodb
```

3. **Clone repository:**
```bash
git clone your-repo-url
cd project/server
npm install
```

4. **Configure environment:**
```bash
cp .env.example .env
# Edit .env with production values
```

5. **Start with PM2:**
```bash
sudo npm install -g pm2
pm2 start server.js --name "interior-design-api"
pm2 startup
pm2 save
```

6. **Setup Nginx reverse proxy:**
```bash
sudo apt install nginx

# Edit /etc/nginx/sites-available/default
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

sudo systemctl restart nginx
```

### Option 3: DigitalOcean App Platform

#### Steps

1. **Connect GitHub repository**
2. **Create new app**
3. **Set environment variables**
4. **Choose deployment region**
5. **Deploy**

---

## Frontend Deployment

### Option 1: Vercel (Recommended)

#### Prerequisites
- Vercel account
- GitHub repository

#### Steps

1. **Connect GitHub:**
   - Go to vercel.com
   - Click "Import Project"
   - Select your repository

2. **Configure:**
   - Set `REACT_APP_API_URL` to production backend
   - Choose deployment region

3. **Deploy:**
   - Automatic on each push to main

### Option 2: Netlify

#### Steps

1. **Build locally:**
```bash
cd client
npm run build
```

2. **Connect to Netlify:**
   - Drag and drop build folder, or
   - Connect GitHub for automatic deployments

3. **Configure environment:**
   - Set environment variables in Netlify dashboard
   - Set `REACT_APP_API_URL` to production backend

### Option 3: AWS S3 + CloudFront

#### Steps

1. **Build:**
```bash
cd client
npm run build
```

2. **Create S3 bucket:**
```bash
aws s3 mb s3://your-bucket-name
```

3. **Upload build:**
```bash
aws s3 sync build/ s3://your-bucket-name
```

4. **Create CloudFront distribution:**
   - Point to S3 bucket
   - Add custom domain
   - Add SSL certificate

---

## Database Deployment

### MongoDB Atlas (Cloud - Recommended)

1. **Create cluster:**
   - Go to mongodb.com/cloud/atlas
   - Create account
   - Create cluster

2. **Get connection string:**
   - Click "Connect"
   - Copy connection string
   - Add to environment variables

3. **Configure backups:**
   - Enable automatic backups
   - Set retention period

### MongoDB Compass (for management)

```bash
# Download from mongodb.com/products/compass
# Connect to production database
# Use for monitoring and management
```

---

## SSL/HTTPS Setup

### Using Let's Encrypt (Free)

#### On Linux servers:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --nginx -d your-domain.com

# Auto-renew
sudo systemctl enable certbot.timer
```

#### On Heroku:
- Use `heroku certs:auto` for automatic HTTPS

#### On AWS:
- Use AWS Certificate Manager

---

## Environment Variables for Production

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/interior_design_prod
JWT_SECRET=your_very_secure_random_secret_key_here
CLIENT_URL=https://your-domain.com
NODE_ENV=production
ADMIN_EMAIL=admin@yourdomain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@yourdomain.com
```

### Frontend (.env.local)
```env
REACT_APP_API_URL=https://api.your-domain.com/api
```

---

## Performance Optimization

### Backend

1. **Enable Gzip compression:**
```javascript
// In server.js
const compression = require('compression');
app.use(compression());
```

2. **Setup caching:**
```javascript
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  next();
});
```

3. **Database indexing:**
```javascript
// Create indexes for frequently queried fields
projectSchema.index({ category: 1 });
projectSchema.index({ featured: 1 });
```

### Frontend

1. **Build optimization:**
```bash
npm run build
# Output goes to build/ folder
```

2. **Image optimization:**
   - Use WebP format
   - Compress before upload
   - Implement lazy loading

3. **Code splitting:**
   - Already implemented with lazy routes
   - Monitor bundle size

---

## Monitoring & Logging

### Setup Error Tracking (Sentry)

1. **Install Sentry:**
```bash
npm install @sentry/node
```

2. **Configure in server:**
```javascript
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'your-sentry-url' });
```

3. **Monitor logs:**
   - Dashboard at sentry.io
   - Alerts for errors

### Server Monitoring

- **PM2 monitoring:** `pm2 monit`
- **AWS CloudWatch:** Monitor EC2 metrics
- **Heroku logs:** `heroku logs --tail`

---

## Database Backups

### Automated Backups (MongoDB Atlas)

- Already enabled by default
- Retention: 7 days
- Frequency: Daily

### Manual Backups

```bash
# Export data
mongodump --uri mongodb+srv://user:pass@cluster.mongodb.net/db

# Import data
mongorestore --uri mongodb+srv://user:pass@cluster.mongodb.net/db dump/
```

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Heroku
        uses: AkhileshNS/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "your-app-name"
          heroku_email: "your-email@example.com"
```

---

## Domain Configuration

### DNS Setup

```
Type: A
Name: @
Value: Your server IP (or CNAME for managed hosting)

Type: CNAME
Name: www
Value: your-domain.com

Type: A
Name: api
Value: Your backend server IP
```

### Email Configuration

```
Type: MX
Priority: 10
Value: mail-server.example.com

Type: TXT
Value: v=spf1 mx -all
```

---

## Maintenance

### Regular Tasks

- [ ] Monitor error logs daily
- [ ] Check database size weekly
- [ ] Review performance metrics weekly
- [ ] Update dependencies monthly
- [ ] Test backup restoration quarterly
- [ ] Security audit quarterly

### Updates

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Test updates
npm test

# Deploy
git push
```

---

## Rollback Plan

### If deployment fails:

1. **Backend (Heroku):**
```bash
heroku releases
heroku rollback v10  # Roll back to previous version
```

2. **Backend (Manual):**
```bash
git revert commit-hash
git push origin main
```

3. **Frontend (Vercel):**
   - Automatic rollback option in dashboard

4. **Database:**
   - Restore from backup via MongoDB Atlas dashboard

---

## Security Checklist

- [ ] All secrets in environment variables
- [ ] SSL/HTTPS enabled
- [ ] CORS configured properly
- [ ] Input validation on all endpoints
- [ ] Rate limiting implemented
- [ ] Admin credentials changed from default
- [ ] Database credentials secure
- [ ] Firewall configured
- [ ] SSH keys secure
- [ ] Regular security audits

---

## Post-Deployment

1. **Test all endpoints:**
   - Use postman collection to test API
   - Manually test all website features

2. **Test admin dashboard:**
   - Login
   - Create/update/delete content
   - Verify permissions

3. **Monitor performance:**
   - Check page load times
   - Monitor error rates
   - Review analytics

4. **User acceptance testing:**
   - Have users test the site
   - Gather feedback
   - Make adjustments

5. **Analytics setup:**
   - Configure Google Analytics
   - Set up conversion tracking
   - Monitor user behavior

---

## Troubleshooting Deployment

### Backend won't start
```bash
# Check logs
heroku logs --tail
# or
pm2 logs

# Check environment variables
heroku config
# or check .env file

# Restart
heroku restart
# or
pm2 restart all
```

### Database connection issues
- Verify connection string
- Check IP whitelist (MongoDB Atlas)
- Verify database exists
- Test connection locally

### Frontend not loading
- Check REACT_APP_API_URL
- Verify build was successful
- Clear browser cache
- Check network requests in DevTools

### Static files not loading
- Verify public folder structure
- Check file permissions
- Verify CDN configuration
- Clear cache

---

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Heroku Docs: https://devcenter.heroku.com
- MongoDB Atlas: https://docs.atlas.mongodb.com
- AWS Docs: https://docs.aws.amazon.com
- Let's Encrypt: https://letsencrypt.org

---

## Contact

For deployment issues or questions, refer to individual platform documentation or contact support.
