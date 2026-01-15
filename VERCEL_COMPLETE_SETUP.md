# COMPLETE VERCEL DEPLOYMENT GUIDE - Step-by-Step

## ⚠️ IMPORTANT: You Need TWO Separate Vercel Projects

Vercel works best with monorepos when you deploy frontend and backend separately.

---

## STEP 1: Prepare Your Repository

### 1.1 Add Root package.json (if missing)
Create `package.json` in project root:
```bash
npm init -y
npm install
```

### 1.2 Ensure .gitignore is correct
```
node_modules/
.env
.env.local
.DS_Store
client/build
server/node_modules
```

### 1.3 Verify files are committed
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push
```

---

## STEP 2: Deploy Backend API First (Critical!)

### 2.1 Create Backend Vercel Project

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. **IMPORTANT**: Set Root Directory to `./server`
5. Click "Deploy"

### 2.2 Wait for deployment to complete
- Copy the deployment URL (example: `https://your-api.vercel.app`)
- **This is your `REACT_APP_API_URL`** → Add `/api` at the end
- Final URL: `https://your-api.vercel.app/api`

### 2.3 Set Backend Environment Variables
1. Go to backend project Settings → Environment Variables
2. Add these variables:

```
MONGODB_URI = [Your MongoDB Atlas connection string]
JWT_SECRET = [Generate a random secret key]
CLIENT_URL = [Leave blank for now - update after frontend deploys]
NODE_ENV = production
```

**Get MongoDB Connection String:**
- Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)
- Select your cluster → Connect → Copy connection string
- Format: `mongodb+srv://username:password@cluster.mongodb.net/interior_design?retryWrites=true&w=majority`

**Generate JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2.4 Redeploy Backend
1. Go to Deployments tab
2. Click the latest deployment
3. Click "Redeploy" button
4. Wait for green checkmark ✅

---

## STEP 3: Deploy Frontend Application

### 3.1 Create Frontend Vercel Project

1. Go to [https://vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. **IMPORTANT**: Set Root Directory to `./client`
5. **DO NOT** deploy yet - configure environment variables first!

### 3.2 Set Frontend Environment Variables (BEFORE deploying!)

1. In the project setup screen, find "Environment Variables"
2. Click "Add"
3. Add:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-api.vercel.app/api` (from Step 2.2)
   - Select: Production, Preview, Development (all three)

4. Click "Deploy Project"

### 3.3 Wait for Frontend Deployment
- Copy frontend URL (example: `https://design-studio.vercel.app`)
- This is your live website!

### 3.4 Update Backend CLIENT_URL
1. Go back to backend project (Step 2)
2. Settings → Environment Variables
3. Update `CLIENT_URL` = `https://design-studio.vercel.app`
4. Redeploy backend

---

## STEP 4: Verification & Testing

### 4.1 Test Frontend
- Visit: `https://design-studio.vercel.app`
- Should load without errors ✅

### 4.2 Test API Connection
- Go to Admin → Login
- Try login (should connect to backend) ✅

### 4.3 Check Browser Console
- Press F12 → Console
- No errors about `REACT_APP_API_URL` being undefined ✅

### 4.4 Check Network Tab
- F12 → Network
- API calls should go to `https://your-api.vercel.app/api` ✅

---

## TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Frontend build fails | Check client/package.json has all dependencies |
| "REACT_APP_API_URL is undefined" | Re-check frontend env vars are set in Vercel Dashboard |
| API calls fail with CORS error | Update backend CORS settings, redeploy |
| Login page shows error | Verify backend is running (check backend deployments) |
| 404 on sub-pages | This is normal - frontend routing configured in vercel.json |

---

## QUICK REFERENCE

**Your Deployment URLs:**
- Website: `https://design-studio.vercel.app`
- API: `https://your-api.vercel.app/api`
- Admin Panel: `https://design-studio.vercel.app/admin`

**What Happens When You Change Code:**
1. Push to GitHub
2. Vercel automatically redeploys ✅
3. New version live in ~1-2 minutes

---

## NEXT IMMEDIATE ACTIONS

1. ✅ Repository committed and pushed
2. ⏳ Deploy backend first (get API URL)
3. ⏳ Deploy frontend with REACT_APP_API_URL env var
4. ⏳ Test both are working
5. ⏳ Share deployed URLs

**Start now:** Go to https://vercel.com → Add Project → Select GitHub repo → Root Directory `./server` → Deploy
