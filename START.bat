@echo off
title AI Newbie Web - Starting...
cd /d "%~dp0"

echo ========================================
echo   AI Newbie Web - Quick Launcher
echo ========================================
echo.

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo Starting dev server on port 5174...
start "" npm run dev

:: Wait and open browser
timeout /t 3 /nobreak >nul
start http://localhost:5174

echo.
echo [OK] AI Newbie Web is running!
echo [OK] Browser opened at http://localhost:5174
echo.
echo Press any key to close this window...
pause >nul
