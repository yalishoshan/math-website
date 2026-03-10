@echo off
REM Registers a Windows Task Scheduler job that runs the daily export every morning at 8:00 AM
REM Run this file as Administrator once to set it up

set SCRIPT_PATH=%~dp0..\scripts\daily-export.mjs
set NODE_PATH=node

schtasks /create /f ^
  /tn "BagrutMathDailyExport" ^
  /tr "\"%NODE_PATH%\" \"%SCRIPT_PATH%\"" ^
  /sc daily ^
  /st 08:00 ^
  /ru "%USERNAME%"

echo.
echo Task created successfully!
echo It will run every day at 08:00 AM.
echo To remove it: schtasks /delete /tn "BagrutMathDailyExport" /f
pause
