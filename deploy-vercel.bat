@echo off
echo.
echo ========================================
echo Design Studio - Vercel Deployment Setup
echo ========================================
echo.
echo This script will:
echo 1. Commit Vercel configuration
echo 2. Push to GitHub
echo 3. Display deployment instructions
echo.
pause
echo.
echo Adding files...
git add vercel.json server/vercel.json DEPLOY_VERCEL.md
echo.
echo Committing...
git commit -m "Add Vercel deployment configuration - ready to deploy"
echo.
echo Pushing to GitHub...
git push
echo.
echo ========================================
echo SUCCESS! Ready for Vercel Deployment
echo ========================================
echo.
echo Next Steps:
echo 1. Visit: https://vercel.com/dashboard
echo 2. Click "Add New Project"
echo 3. Select your GitHub repository
echo 4. Deploy!
echo.
echo For detailed instructions, see: DEPLOY_VERCEL.md
echo.
pause
