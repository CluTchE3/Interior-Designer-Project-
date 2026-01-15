# Kill stuck processes
Write-Host "Cleaning up stuck processes..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process vercel -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 1

# Navigate to project
Write-Host "Navigating to project..." -ForegroundColor Yellow
Set-Location "C:\Users\madzh\Desktop\Interior Design"

# Git operations
Write-Host "Committing changes..." -ForegroundColor Green
git add vercel.json VERCEL_COMPLETE_SETUP.md
git commit -m "Fix Vercel deployment configuration - add complete setup guide"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push

Write-Host "Done! Changes pushed to GitHub." -ForegroundColor Green
Write-Host "Next step: Go to https://vercel.com and deploy" -ForegroundColor Cyan
