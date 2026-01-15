@echo off
REM Kill any stuck vercel processes
taskkill /F /IM node.exe 2>nul

REM Wait a moment
timeout /t 2 /nobreak

REM Navigate to project
cd /d "c:\Users\madzh\Desktop\Interior Design"

REM Git operations
echo.
echo ========================================
echo Committing Vercel Deployment Files
echo ========================================
echo.

git add vercel.json server/vercel.json DEPLOY_VERCEL.md deploy-vercel.bat deploy.js READY_TO_DEPLOY.md

echo Staging files... Done!

git commit -m "Add Vercel deployment configuration - ready to deploy"

echo Committing... Done!

git push

echo.
echo ========================================
echo SUCCESS! Files committed to GitHub
echo ========================================
echo.
echo Your deployment files have been pushed!
echo.
echo Next steps:
echo 1. Visit: https://vercel.com/dashboard
echo 2. Click "Add New Project"
echo 3. Import your GitHub repository
echo 4. Deploy!
echo.
pause
