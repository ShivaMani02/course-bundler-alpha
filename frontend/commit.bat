@ECHO OFF

SET comment=Saved on %date%-%time%

git add .
git commit -m "%comment%"
git push