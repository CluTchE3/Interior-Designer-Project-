cd "c:\Users\madzh\Desktop\Interior Design"
Write-Host "Removing Vercel files..."
git rm -f vercel.json
git rm -f .vercelignore
git rm -f .vercelrc.json
git rm -f VERCEL_DEPLOYMENT.md
git rm -f VERCEL_DEPLOY_MANUAL.md
git rm -f DEPLOYMENT_READY.md
git rm -f server/vercel.json
Write-Host "Committing changes..."
git commit -m "Remove Vercel deployment configuration files"
Write-Host "Pushing to GitHub..."
git push origin main
Write-Host "Done! Vercel files removed."
