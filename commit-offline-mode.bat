@echo off
cd /d "C:\Users\madzh\Desktop\Interior Design"
git add client/src/services/api.js
git commit -m "Add offline mode - client can now run without server"
git push
pause
