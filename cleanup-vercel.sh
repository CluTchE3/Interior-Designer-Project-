#!/bin/bash
cd "c:\Users\madzh\Desktop\Interior Design"
git rm -f vercel.json .vercelignore .vercelrc.json VERCEL_DEPLOYMENT.md VERCEL_DEPLOY_MANUAL.md DEPLOYMENT_READY.md server/vercel.json
git commit -m "Remove Vercel deployment configuration files"
git push origin main
