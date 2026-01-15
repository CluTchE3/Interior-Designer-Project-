@echo off
cd /d "C:\Users\madzh\Desktop\Interior Design"
git add client/src/services/api.js client/.env.local
git commit -m "Remove REACT_APP_API_URL environment variable reference - use pure offline mode for Vercel deployment"
git push
echo.
echo Done! Changes pushed to GitHub. Ready to deploy to Vercel.
pause
