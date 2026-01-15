# Deploy on Vercel

Your Design Studio application is ready to deploy on Vercel!

## Quick Start

### Step 1: Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### Step 2: Deploy Backend (API)
1. Click "Add New Project"
2. Select "Import Git Repository"
3. Choose: `CluTchE3/Interior-Designer-Project-`
4. Configure:
   - Framework: "Other"
   - Root Directory: `server`
5. Click "Deploy"
6. After deployment, copy the API URL (e.g., `https://design-studio-api.vercel.app`)
7. Go to Settings → Environment Variables
8. Add these variables:
   ```
   MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/dbname
   JWT_SECRET = your-random-secret-key
   CLIENT_URL = https://design-studio.vercel.app
   NODE_ENV = production
   ```
9. Redeploy to apply environment variables

### Step 3: Deploy Frontend (React App)
1. Click "Add New Project" again
2. Select your repository again
3. Configure:
   - Framework: "Create React App"
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Add Environment Variable:
   ```
   REACT_APP_API_URL = https://your-backend-url/api
   ```
   (Replace with your backend API URL from Step 2)
5. Click "Deploy"

## After Deployment

### Your URLs will be:
- **Frontend**: `https://design-studio-[random].vercel.app`
- **Backend**: `https://design-studio-api-[random].vercel.app`
- **Admin**: `https://design-studio-[random].vercel.app/admin/login`

### Test Your Deployment:
1. Visit frontend URL to see your website
2. Visit `https://your-backend-url/api/health` to test backend
3. Try admin login at `/admin/login`

## Automatic Redeployment

Every time you push to GitHub main branch, Vercel automatically redeploys both frontend and backend!

## Configuration Files

The Vercel configuration is ready:
- ✅ `vercel.json` - Frontend config
- ✅ `server/vercel.json` - Backend config

Just commit and push, then import on Vercel dashboard!

## Need Help?

1. Vercel Documentation: https://vercel.com/docs
2. MongoDB Atlas: https://www.mongodb.com/cloud/atlas
3. GitHub Repository: https://github.com/CluTchE3/Interior-Designer-Project-

---

**Ready? Go to https://vercel.com/dashboard and deploy! 🚀**
