# ✅ How to Fix Vercel Deployment - Environment Variables

## Problem
`REACT_APP_API_URL` in `.env.local` is being treated as a secret and preventing deployment.

## Solution

### For Local Development (Your Computer)
Keep `.env.local` as is for running locally:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### For Vercel Production Deployment

**IMPORTANT**: `.env.local` files are NOT used by Vercel during build. You must set environment variables in Vercel Dashboard.

#### Step 1: Go to Your Vercel Project Settings
1. Visit https://vercel.com/dashboard
2. Select your frontend project (design-studio or similar)
3. Click **Settings**
4. Go to **Environment Variables** section

#### Step 2: Add the Environment Variable
- **Name**: `REACT_APP_API_URL`
- **Value**: `https://your-backend-api.vercel.app/api`
  - Replace `your-backend-api` with your actual backend URL
  - Example: `https://design-studio-api-abc123.vercel.app/api`
- **Environments**: Check `Production`, `Preview`, `Development`
- Click **Save**

#### Step 3: Redeploy
1. Click **Deployments**
2. Click the three dots (•••) on the latest deployment
3. Select **Redeploy**
4. Click **Redeploy** again to confirm

## ✅ Verification

After redeploying, the build will succeed because:
- ✅ `.env.local` is in `.gitignore` (not pushed to GitHub)
- ✅ `.env.local` is not used by Vercel build
- ✅ Environment variables are set in Vercel Dashboard
- ✅ `REACT_APP_API_URL` will be available during build

## What NOT to Do
❌ Don't commit `.env.local` to GitHub (it's ignored, which is correct)
❌ Don't try to use `.env.local` for Vercel (it doesn't work)
❌ Don't put secrets in `vercel.json` (use Dashboard instead)

## Environment Variables Reference

### Frontend (React App)
```
REACT_APP_API_URL = https://your-backend-url/api
```

### Backend (Node.js)
```
MONGODB_URI = mongodb+srv://user:password@cluster.mongodb.net/dbname
JWT_SECRET = your-secret-key
CLIENT_URL = https://your-frontend-url.vercel.app
NODE_ENV = production
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails: "REACT_APP_API_URL is undefined" | Add `REACT_APP_API_URL` to Vercel Dashboard Environment Variables |
| Frontend can't reach backend | Verify `REACT_APP_API_URL` points to correct backend URL |
| Environment variable shows as "secret" | This is normal in Vercel Dashboard display (masked for security) |
| Changes not reflected | Redeploy project after adding/updating env vars |

## Quick Checklist
- [ ] `.env.local` is in `.gitignore` ✓
- [ ] `.env.local` is NOT committed to GitHub ✓
- [ ] `REACT_APP_API_URL` set in Vercel Dashboard ✓
- [ ] Value points to correct backend URL ✓
- [ ] Marked for Production environment ✓
- [ ] Project redeployed after setting variable ✓

---

**Once you add `REACT_APP_API_URL` to Vercel Dashboard and redeploy, your frontend will deploy successfully!** 🚀
