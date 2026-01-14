# Vercel Deployment Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Vercel CLI installed (`npm install -g vercel`)
- GitHub repository (already done ✓)

---

## Step 1: Deploy Backend to Vercel

### Option A: Deploy Backend as Separate Project (Recommended)

1. **Navigate to backend folder:**
```bash
cd server
```

2. **Install Vercel CLI (if not already installed):**
```bash
npm install -g vercel
```

3. **Login to Vercel:**
```bash
vercel login
```

4. **Deploy backend:**
```bash
vercel --prod
```

5. **When prompted, configure:**
- Project name: `interior-design-api`
- Framework: `Other`
- Root directory: `.`

6. **After deployment, you'll get a URL like:** `https://interior-design-api.vercel.app`

7. **Add environment variables in Vercel dashboard:**
   - Go to https://vercel.com/dashboard
   - Select the `interior-design-api` project
   - Go to Settings → Environment Variables
   - Add:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: Your secure JWT secret
     - `CLIENT_URL`: Your frontend URL (e.g., https://your-domain.vercel.app)
     - `NODE_ENV`: `production`

8. **Redeploy after adding env variables:**
```bash
vercel --prod
```

---

## Step 2: Deploy Frontend to Vercel

### From Root Directory:

1. **Go back to root:**
```bash
cd ..
```

2. **Deploy frontend:**
```bash
vercel --prod
```

3. **When prompted, configure:**
- Project name: `design-studio` (or your choice)
- Framework: `Create React App`
- Root directory: `.`
- Build command: `cd client && npm run build`
- Output directory: `client/build`

4. **Add environment variables:**
   - `REACT_APP_API_URL`: Your backend API URL from Step 1 (e.g., `https://interior-design-api.vercel.app/api`)

5. **Vercel will automatically deploy**

---

## Alternative: Deploy Backend to Other Services

### If you prefer not to use Vercel for backend:

**Option 1: Railway (Recommended)**
- Go to https://railway.app
- Connect GitHub
- Select your repository
- Add MongoDB plugin
- Deploy

**Option 2: Heroku**
```bash
heroku login
heroku create interior-design-api
git push heroku main
```

**Option 3: Render**
- Go to https://render.com
- Connect GitHub
- Create new Web Service
- Deploy

---

## Deployment Checklist

### Before Deployment:

- [ ] MongoDB Atlas account created
- [ ] Database connection string obtained
- [ ] JWT_SECRET generated (use `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
- [ ] Frontend `.env.local` has correct API URL
- [ ] Backend `.env` has all required variables
- [ ] All code committed to GitHub
- [ ] No sensitive data in code

### After Deployment:

- [ ] Backend API responds at `/api/health` or test endpoint
- [ ] Frontend loads without errors
- [ ] API calls from frontend work correctly
- [ ] Admin login accessible
- [ ] Database operations working

---

## Common Issues & Solutions

### Issue: CORS Errors
**Solution:** Update `CORS_ORIGIN` in backend `.env`:
```env
CLIENT_URL=https://your-vercel-frontend.vercel.app
```

### Issue: Frontend can't reach backend
**Solution:** Verify `REACT_APP_API_URL` environment variable:
```
REACT_APP_API_URL=https://your-backend-api.vercel.app/api
```

### Issue: MongoDB connection fails
**Solution:** 
- Check MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Verify connection string format
- Test connection locally first

### Issue: Static files not loading
**Solution:** Clear Vercel cache:
```bash
vercel --prod --force
```

---

## Environment Variables Reference

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/interior_design_prod
JWT_SECRET=your_secure_random_key_here
CLIENT_URL=https://design-studio.vercel.app
NODE_ENV=production
ADMIN_EMAIL=admin@designstudio.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@designstudio.com
```

### Frontend (.env.local)
```env
REACT_APP_API_URL=https://interior-design-api.vercel.app/api
```

---

## Monitoring & Logs

### View Backend Logs:
```bash
vercel logs interior-design-api --prod
```

### View Frontend Logs:
```bash
vercel logs design-studio --prod
```

### Real-time Monitoring:
- Go to https://vercel.com/dashboard
- Select project
- View Analytics and Function logs

---

## Custom Domain Setup

1. **Add domain in Vercel:**
   - Project Settings → Domains
   - Add your custom domain

2. **Update DNS records:**
   - Add `CNAME` record pointing to `cname.vercel.app`
   - Or update `A` records with Vercel's IP

3. **Wait for DNS propagation (5-48 hours)**

---

## Automatic Deployments

Every push to GitHub automatically deploys:

1. Commits to `main` → Deploy to production
2. Pull requests → Deploy to preview URL
3. Other branches → Deploy to preview URL

---

## Rollback Deployment

### Rollback to previous version:
```bash
vercel rollback
```

### Or manually redeploy:
```bash
git push
```

---

## Performance Optimization

### Vercel Serverless Functions:
- Automatic code splitting
- Edge caching
- Automatic HTTPS
- DDoS protection

### Frontend Optimizations:
- Already implemented: Code splitting, lazy loading
- Vercel handles: Image optimization, compression

### Backend Optimizations:
- Database indexing
- Connection pooling
- Response caching

---

## Support & Documentation

- Vercel Docs: https://vercel.com/docs
- Vercel CLI: https://vercel.com/docs/cli
- MongoDB Atlas: https://docs.atlas.mongodb.com
- React Deployment: https://vercel.com/guides/deploying-react-with-vercel

---

## Quick Deploy Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy backend
cd server && vercel --prod

# Deploy frontend
cd .. && vercel --prod

# View logs
vercel logs [project-name] --prod

# Rollback
vercel rollback
```

---

## Success Indicators

✅ Backend responds to requests  
✅ Frontend loads without errors  
✅ API calls succeed  
✅ Admin panel accessible  
✅ Database operations work  
✅ No console errors  

---

Once deployed, your application will be:
- **Globally distributed** with edge servers
- **Automatically scaled** based on traffic
- **Protected** with DDoS mitigation
- **Optimized** with caching and compression
- **Monitored** with built-in analytics
