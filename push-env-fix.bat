@echo off
REM Kill stuck processes
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak

cd /d "c:\Users\madzh\Desktop\Interior Design"

echo.
echo ========================================
echo Committing Environment Variables Fix
echo ========================================
echo.

git add FIX_VERCEL_ENV_VARS.md client/.env.example
git commit -m "Fix Vercel environment variables configuration - add env var setup guide"
git push

echo.
echo ========================================
echo SUCCESS! Changes pushed to GitHub
echo ========================================
echo.
echo Next steps:
echo 1. Go to https://vercel.com/dashboard
echo 2. Select your frontend project
echo 3. Settings -^> Environment Variables
echo 4. Add REACT_APP_API_URL with your backend URL
echo 5. Redeploy
echo.
pause
