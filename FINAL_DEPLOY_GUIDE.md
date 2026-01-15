# 🚀 DEPLOY ON VERCEL - COMPLETE GUIDE

## Your Application Details
- **Repository**: https://github.com/CluTchE3/Interior-Designer-Project-
- **Frontend**: React (client folder)
- **Backend**: Express.js (server folder)
- **Database**: MongoDB (you provide connection)

---

## ⚡ DEPLOY IN 5 MINUTES

### STEP 1: First Time Setup (1 min)
1. Go to: https://vercel.com (sign up if needed with GitHub)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Search: `Interior-Designer-Project-`
5. Click **"Import"**

### STEP 2: Deploy Backend API (2 min)
**Configuration:**
- Framework: **Other**
- Root Directory: **server**
- Build Command: **`npm install`**
- Output Directory: (leave blank)

**Environment Variables:**
```
MONGODB_URI = mongodb+srv://[your-username]:[your-password]@[cluster].mongodb.net/[dbname]
JWT_SECRET = your-secret-key-here
CLIENT_URL = https://[will-be-generated].vercel.app
NODE_ENV = production
```

**Click "Deploy"** → Wait for completion → **Copy the URL** (e.g., `https://design-studio-api-abc123.vercel.app`)

### STEP 3: Deploy Frontend (React) (2 min)
1. Go to Vercel Dashboard again
2. Click **"Add New Project"**
3. Import same repository again
4. Select "Create React App" framework
5. **Configuration:**
   - Root Directory: **client**
   - Build Command: **`npm run build`**
   - Output Directory: **build**
   - Environment Variable:
     ```
     REACT_APP_API_URL = https://[your-backend-url]/api
     ```
     (Replace with backend URL from Step 2)

**Click "Deploy"** → Wait for completion → **You'll get Frontend URL**

---

## 📊 AFTER DEPLOYMENT - YOUR LINKS

You'll receive these links:

| Type | Example URL |
|------|------------|
| **Frontend Website** | `https://design-studio-abc123.vercel.app` |
| **Admin Panel** | `https://design-studio-abc123.vercel.app/admin/login` |
| **Backend API** | `https://design-studio-api-xyz789.vercel.app` |
| **API Health Check** | `https://design-studio-api-xyz789.vercel.app/api/health` |

---

## 🔑 GET MONGODB CONNECTION STRING

If you don't have MongoDB yet:

1. **Go to**: https://www.mongodb.com/cloud/atlas
2. **Sign up** (free tier available)
3. **Create cluster**
4. **Get connection string** (looks like: `mongodb+srv://user:pass@cluster.mongodb.net/dbname`)
5. **Add to Vercel** as `MONGODB_URI` environment variable

---

## ✅ TEST YOUR DEPLOYMENT

After getting your links, test:

1. **Frontend loads:**
   ```
   https://design-studio-[your-id].vercel.app
   ```
   Should show your Design Studio website

2. **Backend responds:**
   ```
   https://design-studio-api-[your-id].vercel.app/api/health
   ```
   Should return `{"status":"ok"}`

3. **Admin login works:**
   ```
   https://design-studio-[your-id].vercel.app/admin/login
   ```

---

## 🔄 AUTOMATIC UPDATES

Every time you push to GitHub:
```bash
git add .
git commit -m "your changes"
git push
```

Vercel **automatically redeploys** both frontend and backend!

---

## 📞 SUPPORT

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- GitHub Repo: https://github.com/CluTchE3/Interior-Designer-Project-

---

## 🎯 QUICK CHECKLIST

- [ ] Sign in to Vercel (https://vercel.com)
- [ ] Import GitHub repository
- [ ] Deploy backend (server folder)
- [ ] Copy backend URL
- [ ] Deploy frontend (client folder) with backend URL
- [ ] Create MongoDB Atlas cluster
- [ ] Add MongoDB connection string to backend
- [ ] Test all three links
- [ ] Celebrate! 🎉

---

**Your deployment files are ready in GitHub. Just follow the steps above on Vercel dashboard!**

Need help? The configuration files are already in your repository:
- `vercel.json` - Frontend config
- `server/vercel.json` - Backend config
