@echo off
cd /d "c:\Users\madzh\Desktop\Interior Design"
echo.
echo ========================================
echo Committing new cleanup scripts to GitHub
echo ========================================
echo.
echo Adding files...
git add cleanup-vercel.ps1 cleanup-vercel.sh commit-changes.bat
echo.
echo Committing changes...
git commit -m "Add cleanup scripts for Vercel configuration removal"
echo.
echo Pushing to GitHub...
git push
echo.
echo ========================================
echo Done! Changes pushed to GitHub
echo ========================================
echo.
pause
