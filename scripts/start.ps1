# ================================================================
# AI Newbie Web - Quick Start Script
# ================================================================

param(
    [switch]$DevMode = $true,
    [switch]$ProductionBuild = $false,
    [switch]$Preview = $false
)

Write-Host "`n╔════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║        🚀 AI NEWBIE WEB - QUICK START             ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

Set-Location "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web"

# Run health check
Write-Host "📊 Running health check..." -ForegroundColor Yellow
.\scripts\health-check.ps1
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ Health check failed! Please fix issues before starting." -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Health check passed!`n" -ForegroundColor Green

if ($Preview) {
    Write-Host "👀 Starting preview server..." -ForegroundColor Yellow
    npm run preview
    exit $LASTEXITCODE
}

if ($ProductionBuild) {
    Write-Host "🏗️ Building for production..." -ForegroundColor Yellow
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Production build complete!" -ForegroundColor Green
        Write-Host "📦 Build output: dist/" -ForegroundColor Cyan
        Write-Host "`nTo preview: npm run preview" -ForegroundColor Yellow
        Write-Host "To deploy: Push to main branch (Vercel auto-deploy)" -ForegroundColor Yellow
    }
    exit $LASTEXITCODE
}

# Default: Development Mode
Write-Host "🔧 Starting development mode..." -ForegroundColor Yellow
Write-Host "`n📋 Development server will start on:" -ForegroundColor Cyan
Write-Host "   🌐 http://localhost:5174" -ForegroundColor White
Write-Host ""

# Check first run
$firstRunFlag = ".first-run"
$isFirstRun = !(Test-Path $firstRunFlag)

if ($isFirstRun) {
    Write-Host "🎉 First time setup detected!" -ForegroundColor Green
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    
    if ($LASTEXITCODE -eq 0) {
        New-Item -ItemType File -Path $firstRunFlag -Force | Out-Null
        Write-Host "✅ Dependencies installed!" -ForegroundColor Green
    } else {
        Write-Host "❌ Dependency installation failed!" -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n🚀 Starting development server..." -ForegroundColor Green
Write-Host "⏳ Opening browser...`n" -ForegroundColor Yellow

npm run dev

Write-Host "`n👋 Development server stopped. Goodbye!" -ForegroundColor Cyan
